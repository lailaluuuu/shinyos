// Firebase Auth + Firestore for ShinyOS — username-first, XP, streaks, leaderboard
// Uses Firebase Web SDK v9+ modular (works on GitHub Pages without bundlers)
// Email is optional and not part of main UX.

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import {
  getAuth,
  signInAnonymously,
  signOut,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  query,
  orderBy,
  limit,
  getDocs,
} from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";

// ============================================
// FIREBASE CONFIG — Replace with your own keys
// Enable Anonymous auth in Firebase Console → Authentication → Sign-in methods
// ============================================
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const USERS = "users";
const USERNAMES = "usernames";
const LEADERBOARD_LIMIT = 100;

let currentUser = null;
let userProgress = null;

// Username required gate: resolves when user progress has been loaded from Firestore
let userProgressReadyResolve = null;
let userProgressReadyPromise = null;

function getTodayString() {
  return new Date().toISOString().split("T")[0];
}

function getDaysDiff(dateStr1, dateStr2) {
  const d1 = new Date(dateStr1);
  const d2 = new Date(dateStr2);
  return Math.floor((d2 - d1) / (1000 * 60 * 60 * 24));
}

// ------------------------------
// First-time username prompt
// ------------------------------

function showUsernameModal() {
  const el = document.getElementById("usernameModal");
  if (el) el.classList.remove("is-hidden");
}

function hideUsernameModal() {
  const el = document.getElementById("usernameModal");
  if (el) el.classList.add("is-hidden");
}

function setUsernameError(msg) {
  const el = document.getElementById("usernameError");
  if (el) {
    el.textContent = msg || "";
    el.classList.toggle("is-visible", !!msg);
  }
}

// Check username unique via usernames collection
// Defensive: wraps Firestore read in try/catch to handle permission errors
async function isUsernameAvailable(normalized) {
  try {
    const ref = doc(db, USERNAMES, normalized);
    const snap = await getDoc(ref);
    return !snap.exists();
  } catch (e) {
    // On permission error or any Firestore failure, log and assume available
    // This allows username creation to proceed even if Firestore is misconfigured
    console.warn("Username availability check failed (Firestore may have permission issues):", e);
    return true; // Assume available to allow user to proceed
  }
}

// Create anonymous user + user doc + usernames entry
async function createUserWithUsername(username) {
  const raw = (username || "").trim();
  if (!raw) {
    setUsernameError("Username is required.");
    return false;
  }

  const normalized = raw.toLowerCase().replace(/\s+/g, "");
  if (!normalized) {
    setUsernameError("Username is required.");
    return false;
  }

  const available = await isUsernameAvailable(normalized);
  if (!available) {
    setUsernameError("That username is already taken. Try another.");
    return false;
  }

  try {
    const cred = await signInAnonymously(auth);
    const uid = cred.user.uid;
    const today = getTodayString();

    const userDoc = {
      username: raw,
      xp: 0,
      streak: 1,
      lastLogin: today,
      lessonsCompleted: [],
    };

    // Defensive: Firestore writes wrapped in try/catch - don't block auth on write failures
    try {
      await setDoc(doc(db, USERS, uid), userDoc);
      await setDoc(doc(db, USERNAMES, normalized), { uid });
    } catch (firestoreError) {
      // Log but don't block - user is authenticated, app can continue
      console.warn("Firestore write failed (permissions may be misconfigured):", firestoreError);
      // Continue anyway - user is authenticated and can use the app
    }

    userProgress = userDoc;
    currentUser = cred.user;
    hideUsernameModal();
    setUsernameError("");

    // Auth ready is dispatched from onAuthStateChanged; do not dispatch here
    return true;
  } catch (e) {
    console.error("Create user error:", e);
    setUsernameError("Something went wrong. Please try again.");
    return false;
  }
}

function dispatchAuthReady(hasUser) {
  window.__firebaseAuthReady = { hasUser };
  window.dispatchEvent(
    new CustomEvent("firebase:authready", { detail: { hasUser } })
  );
}

// Username required gate: set username for existing user (already signed in, no username in Firestore).
// Defensive: Firestore failures show error, keep prompt open, never throw.
async function setUsernameForCurrentUser(raw) {
  const trimmed = (raw || "").trim();
  if (!trimmed) {
    setUsernameError("Username is required.");
    return false;
  }

  const normalized = trimmed.toLowerCase().replace(/\s+/g, "");
  if (!normalized) {
    setUsernameError("Username is required.");
    return false;
  }

  const available = await isUsernameAvailable(normalized);
  if (!available) {
    setUsernameError("That username is already taken. Try another.");
    return false;
  }

  if (!currentUser) return false;

  try {
    await setDoc(doc(db, USERS, currentUser.uid), { username: trimmed }, { merge: true });
    await setDoc(doc(db, USERNAMES, normalized), { uid: currentUser.uid });
  } catch (e) {
    console.warn("Firestore write failed when setting username:", e);
    setUsernameError("Something went wrong. Please try again.");
    return false;
  }

  if (!userProgress) userProgress = { username: trimmed, xp: 0, streak: 1, lastLogin: getTodayString(), lessonsCompleted: [] };
  else userProgress.username = trimmed;

  hideUsernameModal();
  setUsernameError("");
  // Resume app init after username set
  window.dispatchEvent(new CustomEvent("firebase:usernameset", { detail: { username: trimmed } }));
  return true;
}

// ------------------------------
// Restore returning user
// ------------------------------

// Defensive: Firestore read wrapped in try/catch - never blocks, always provides fallback
async function loadUserProgress(uid) {
  const today = getTodayString();
  
  try {
    const userRef = doc(db, USERS, uid);
    const snap = await getDoc(userRef);

    if (snap.exists()) {
      userProgress = snap.data();

      // Streak logic on login / app load
      const lastLogin = userProgress.lastLogin || null;
      if (lastLogin) {
        const daysDiff = getDaysDiff(lastLogin, today);
        if (daysDiff === 0) {
          // Same day — no change
        } else if (daysDiff === 1) {
          userProgress.streak = (userProgress.streak || 0) + 1;
        } else {
          userProgress.streak = 1;
        }
      } else {
        userProgress.streak = userProgress.streak || 1;
      }

      userProgress.lastLogin = today;
    } else {
      // User doc doesn't exist - create default
      userProgress = {
        username: "Learner",
        xp: 0,
        streak: 1,
        lastLogin: today,
        lessonsCompleted: [],
      };
    }

    // Try to save, but don't block on failure
    try {
      await saveUserProgressToFirestore();
    } catch (saveError) {
      console.warn("Failed to save user progress to Firestore:", saveError);
    }
    
    syncProgressToApp();
  } catch (e) {
    // Firestore permission error or any other error - provide fallback
    console.warn("Error loading user progress from Firestore (permissions may be misconfigured):", e);
    
    // Always provide fallback data so app can continue
    userProgress = {
      username: "Learner",
      xp: 0,
      streak: 1,
      lastLogin: today,
      lessonsCompleted: [],
    };
    
    syncProgressToApp();
  } finally {
    if (userProgressReadyResolve) {
      userProgressReadyResolve();
      userProgressReadyResolve = null;
    }
  }
}

async function saveUserProgressToFirestore() {
  if (!currentUser || !userProgress) return;
  try {
    const ref = doc(db, USERS, currentUser.uid);
    await setDoc(ref, userProgress, { merge: true });
  } catch (e) {
    console.error("Error saving progress:", e);
  }
}

function syncProgressToApp() {
  if (!userProgress) return;

  if (typeof window.xp !== "undefined") window.xp = userProgress.xp ?? 0;
  if (typeof window.streak !== "undefined")
    window.streak = userProgress.streak ?? 0;
  if (typeof window.lastLessonDate !== "undefined")
    window.lastLessonDate = userProgress.lastLogin ?? null;
  if (typeof window.earnedBadges !== "undefined" && userProgress.lessonsCompleted) {
    window.earnedBadges = userProgress.lessonsCompleted.filter((id) =>
      String(id).includes("-complete")
    );
  }

  updateUIFromProgress();
}

function syncAppToProgress() {
  if (!userProgress) {
    userProgress = {
      username: "Learner",
      xp: 0,
      streak: 1,
      lastLogin: getTodayString(),
      lessonsCompleted: [],
    };
  }

  if (typeof window.xp !== "undefined") userProgress.xp = window.xp;
  if (typeof window.streak !== "undefined") userProgress.streak = window.streak;
  if (typeof window.lastLessonDate !== "undefined" && window.lastLessonDate) {
    userProgress.lastLogin = window.lastLessonDate;
  }
  if (typeof window.earnedBadges !== "undefined") {
    const badges = window.earnedBadges || [];
    const existing = new Set(userProgress.lessonsCompleted || []);
    badges.forEach((b) => existing.add(b));
    userProgress.lessonsCompleted = Array.from(existing);
  }
}

function updateUIFromProgress() {
  if (!userProgress) return;

  const xpVal = document.getElementById("xpValue");
  const streakVal = document.getElementById("streakValue");
  const levelVal = document.getElementById("levelValue");
  const xpBar = document.getElementById("xpProgressMini");

  if (xpVal) xpVal.textContent = String(userProgress.xp ?? 0);
  if (streakVal) streakVal.textContent = String(userProgress.streak ?? 0);

  const lvl = Math.floor((userProgress.xp ?? 0) / 100) + 1;
  if (levelVal) levelVal.textContent = String(lvl);
  if (xpBar) {
    const pct = (userProgress.xp ?? 0) % 100;
    xpBar.style.width = `${pct}%`;
  }

  if (typeof window.syncBottomXpPill === "function") window.syncBottomXpPill();
}

// ------------------------------
// Rotating status message
// ------------------------------

function getUsername() {
  return (userProgress && userProgress.username) || "";
}

// Leaderboard query & render — top by XP, then streak. Rank = 1-based index in top N.
// Firestore: create composite index on users (xp desc, streak desc) when prompted.
// Rules: users/{uid} — read/write if request.auth.uid == uid; usernames — read for uniqueness, write with auth.
// Defensive: Always returns empty array on error, never throws
async function fetchLeaderboard() {
  try {
    const q = query(
      collection(db, USERS),
      orderBy("xp", "desc"),
      orderBy("streak", "desc"),
      limit(LEADERBOARD_LIMIT)
    );
    const snap = await getDocs(q);
    const list = [];
    snap.forEach((d) => {
      const data = d.data();
      if (data.username) {
        list.push({
          uid: d.id,
          username: data.username,
          xp: data.xp ?? 0,
          streak: data.streak ?? 0,
        });
      }
    });
    return list;
  } catch (e) {
    // Permission error or any Firestore failure - return empty array
    // This allows app to continue, leaderboard just won't show data
    console.warn("Leaderboard fetch failed (Firestore permissions may be misconfigured):", e);
    return [];
  }
}

// Defensive: Handles Firestore errors gracefully
async function getCurrentUserRank() {
  if (!currentUser || !userProgress) return null;
  try {
    const list = await fetchLeaderboard();
    const idx = list.findIndex((r) => r.uid === currentUser.uid);
    return idx >= 0 ? idx + 1 : null;
  } catch (e) {
    // If leaderboard fetch fails, return null (rank unavailable)
    console.warn("Failed to get user rank:", e);
    return null;
  }
}

// ------------------------------
// Auth state
// ------------------------------

onAuthStateChanged(auth, async (user) => {
  if (user) {
    currentUser = user;
    userProgress = null;
    userProgressReadyPromise = new Promise((r) => { userProgressReadyResolve = r; });
    hideUsernameModal();

    // Load user progress; when done, userProgressReadyPromise resolves (username gate uses it)
    loadUserProgress(user.uid).catch((e) => {
      console.warn("Background user progress load failed:", e);
      if (userProgressReadyResolve) {
        userProgressReadyResolve();
        userProgressReadyResolve = null;
      }
    });

    dispatchAuthReady(true);
  } else {
    currentUser = null;
    userProgress = null;
    userProgressReadyPromise = null;
    userProgressReadyResolve = null;
    showUsernameModal();
    dispatchAuthReady(false);
  }
});

// ------------------------------
// Expose to app.js
// ------------------------------

window.firebaseSaveProgress = async function () {
  if (!currentUser) return;
  syncAppToProgress();
  await saveUserProgressToFirestore();
};

window.firebaseAddCompletedLesson = async function (lessonId) {
  if (!currentUser || !userProgress) return;
  const list = userProgress.lessonsCompleted || [];
  if (list.includes(lessonId)) return;
  userProgress.lessonsCompleted = [...list, lessonId];
  await saveUserProgressToFirestore();
};

window.firebaseIsLoggedIn = function () {
  return currentUser != null;
};

window.firebaseLogout = async function () {
  try {
    await signOut(auth);
  } catch (e) {
    console.error("[firebase] Logout failed:", e);
  }
};

window.firebaseGetUsername = getUsername;
window.firebaseGetRank = getCurrentUserRank;
window.firebaseFetchLeaderboard = fetchLeaderboard;
window.firebaseGetUid = function () {
  return currentUser ? currentUser.uid : null;
};

// Username required gate: promise that resolves when user progress has been loaded
window.firebaseWhenUserProgressReady = function () {
  if (!userProgressReadyPromise) return Promise.resolve();
  return userProgressReadyPromise;
};

// Username required gate: true if user has a non-empty username in Firestore / userProgress
window.firebaseHasUsername = function () {
  const u = (userProgress && userProgress.username) || "";
  return typeof u === "string" && u.trim().length > 0;
};

// Username required gate: set username for existing user; dispatches firebase:usernameset on success
window.firebaseSetUsernameForCurrentUser = setUsernameForCurrentUser;

// Username modal submit — create new user (no auth) or set username for existing user (auth, no username)
window.firebaseSubmitUsername = async function () {
  const input = document.getElementById("usernameInput");
  const username = input ? input.value.trim() : "";
  if (!currentUser) return createUserWithUsername(username);
  return setUsernameForCurrentUser(username);
};

// Username prompt overlay: disable confirm until valid (required, trim)
function updateUsernameSubmitState() {
  const input = document.getElementById("usernameInput");
  const submitBtn = document.getElementById("usernameSubmit");
  if (!input || !submitBtn) return;
  const valid = (input.value || "").trim().length > 0;
  submitBtn.disabled = !valid;
}

// Init: wire username modal form
function setupUsernameModal() {
  const form = document.getElementById("usernameForm");
  const input = document.getElementById("usernameInput");
  const submitBtn = document.getElementById("usernameSubmit");

  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = "…";
      }
      await window.firebaseSubmitUsername();
      if (submitBtn) {
        updateUsernameSubmitState();
        submitBtn.textContent = "Let's go ✨";
      }
    });
  }

  if (input) {
    input.addEventListener("input", () => {
      setUsernameError("");
      updateUsernameSubmitState();
    });
    input.addEventListener("keydown", (e) => {
      if (e.key === "Escape") setUsernameError("");
    });
  }

  updateUsernameSubmitState();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", setupUsernameModal);
} else {
  setupUsernameModal();
}
