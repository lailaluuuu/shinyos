// firebase.js
// IMPORTANT: This file must be loaded with:
// <script type="module" src="firebase.js"></script>

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import {
  getAuth,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  signOut
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  updateDoc,
  runTransaction,
  serverTimestamp,
  collection,
  query,
  orderBy,
  limit,
  getDocs
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";

// ---- YOUR FIREBASE CONFIG HERE ----
// TODO: Replace all placeholder values with your real Firebase project config.
const firebaseConfig = {
  apiKey: "YOUR_KEY",
  authDomain: "YOUR_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_BUCKET",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

let app, auth, db;

try {
  app = initializeApp(firebaseConfig);
  auth = getAuth(app);
  db = getFirestore(app);
  console.log("[firebase] Firebase initialized");
  window.__firebaseModuleLoaded = true;
} catch (e) {
  console.error("[firebase] Failed to initialize Firebase. Check firebaseConfig.", e);
}

let _uid = null;
let _profile = null;

let _readyResolve;
let _progressReady = new Promise((res) => (_readyResolve = res));

function userRef(uid) {
  return doc(db, "users", uid);
}
function usernameRef(username) {
  return doc(db, "usernames", username);
}

async function ensureProfile(uid) {
  const ref = userRef(uid);
  const snap = await getDoc(ref);

  if (!snap.exists()) {
    const base = {
      username: "",
      xp: 120,
      streak: 0,
      lastLessonDate: null,
      lessonsCompleted: [],
      badges: [],
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp()
    };
    await setDoc(ref, base, { merge: true });
    _profile = base;
  } else {
    _profile = snap.data();
  }

  // Sync into app globals (your app already uses these)
  window.xp = typeof _profile.xp === "number" ? _profile.xp : 120;
  window.streak = typeof _profile.streak === "number" ? _profile.streak : 0;
  window.lastLessonDate = _profile.lastLessonDate || null;
  window.earnedBadges = Array.isArray(_profile.badges) ? _profile.badges : (window.earnedBadges || []);

  if (_readyResolve) _readyResolve();
}

if (auth) {
onAuthStateChanged(auth, async (user) => {
  _uid = user ? user.uid : null;

  // Let your app know auth is ready
  window.__firebaseAuthReady = { hasUser: !!user };
  window.dispatchEvent(new CustomEvent("firebase:authready", { detail: { hasUser: !!user } }));

  if (!user) {
    _profile = null;
    if (_readyResolve) _readyResolve();
    return;
  }

  try {
    await ensureProfile(user.uid);
  } catch (e) {
    console.warn("Failed to init/load profile:", e);
    if (_readyResolve) _readyResolve();
  }
});
}

// ---- Exposed helpers your app expects ----
window.firebaseIsLoggedIn = () => !!_uid;
window.firebaseGetUid = () => _uid;

window.firebaseWhenUserProgressReady = () => _progressReady;

window.firebaseGetUsername = () =>
  (_profile && _profile.username) ? _profile.username : "";
window.firebaseHasUsername = () => !!(_profile && _profile.username);

// Auth
window.firebaseLoginGoogle = async () => {
  if (!auth) {
    console.error("[firebase] Auth not initialized. Check firebaseConfig and script load order.");
    alert("Login is not ready yet. Please check your Firebase configuration.");
    return;
  }
  try {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
  } catch (e) {
    console.error("[firebase] Google login failed:", e);
    alert("Google login failed: " + (e.message || "See console for details."));
  }
};
window.firebaseLogout = async () => {
  if (!auth) return;
  try {
    await signOut(auth);
  } catch (e) {
    console.error("[firebase] Logout failed:", e);
  }
};

// Save progress from app globals
window.firebaseSaveProgress = async () => {
  if (!_uid) return;

  const payload = {
    xp: typeof window.xp === "number" ? window.xp : 120,
    streak: typeof window.streak === "number" ? window.streak : 0,
    lastLessonDate: window.lastLessonDate || null,
    badges: Array.isArray(window.earnedBadges) ? window.earnedBadges : [],
    updatedAt: serverTimestamp()
  };

  await setDoc(userRef(_uid), payload, { merge: true });
  _profile = { ...(_profile || {}), ...payload };
};

// Add lesson completion id (idempotent)
window.firebaseAddCompletedLesson = async (lessonId) => {
  if (!_uid) return;

  await runTransaction(db, async (tx) => {
    const ref = userRef(_uid);
    const snap = await tx.get(ref);
    const data = snap.exists() ? snap.data() : {};
    const arr = Array.isArray(data.lessonsCompleted) ? data.lessonsCompleted : [];
    if (!arr.includes(lessonId)) arr.push(lessonId);

    tx.set(ref, { lessonsCompleted: arr, updatedAt: serverTimestamp() }, { merge: true });
  });
};

// Username setter with uniqueness guarantee
window.firebaseSetUsername = async (desired) => {
  if (!_uid) throw new Error("Not logged in");

  const clean = (desired || "").trim().toLowerCase();
  if (!clean) throw new Error("Invalid username");

  await runTransaction(db, async (tx) => {
    const uRef = userRef(_uid);
    const nameRef = usernameRef(clean);

    const nameSnap = await tx.get(nameRef);
    if (nameSnap.exists()) {
      const existing = nameSnap.data();
      if (existing && existing.uid && existing.uid !== _uid) {
        const err = new Error("Username taken");
        err.code = "username/taken";
        throw err;
      }
    }

    // Reserve username -> uid mapping
    tx.set(nameRef, { uid: _uid, updatedAt: serverTimestamp() }, { merge: true });
    // Store on user profile
    tx.set(uRef, { username: clean, updatedAt: serverTimestamp() }, { merge: true });
  });

  _profile = { ...(_profile || {}), username: clean };
};

// Leaderboard: top 20 by XP
window.firebaseFetchLeaderboard = async () => {
  const qy = query(collection(db, "users"), orderBy("xp", "desc"), limit(20));
  const snap = await getDocs(qy);

  const rows = [];
  snap.forEach((d) => {
    const v = d.data();
    rows.push({
      uid: d.id,
      username: v.username || "anon",
      xp: typeof v.xp === "number" ? v.xp : 0,
      streak: typeof v.streak === "number" ? v.streak : 0
    });
  });
  return rows;
};

// Rank in top list (simple)
window.firebaseGetRank = async () => {
  if (!_uid) return null;
  const rows = await window.firebaseFetchLeaderboard();
  const idx = rows.findIndex((r) => r.uid === _uid);
  return idx >= 0 ? (idx + 1) : null;
};

