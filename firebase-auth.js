// Firebase Auth + Firestore for ShinyOS
// Uses Firebase Web SDK v9+ modular (works on GitHub Pages without bundlers)

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { 
  getAuth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged 
} from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";
import { 
  getFirestore, 
  doc, 
  getDoc, 
  setDoc 
} from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";

// ============================================
// FIREBASE CONFIG - Replace with your own keys
// ============================================
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// ============================================
// USER PROGRESS STATE
// ============================================
let currentUser = null;
let userProgress = null;

// ============================================
// HELPER: Get today's date as YYYY-MM-DD
// ============================================
function getTodayString() {
  return new Date().toISOString().split('T')[0];
}

// ============================================
// HELPER: Calculate days between two date strings
// ============================================
function getDaysDiff(dateStr1, dateStr2) {
  const d1 = new Date(dateStr1);
  const d2 = new Date(dateStr2);
  const diffTime = Math.abs(d2 - d1);
  return Math.floor(diffTime / (1000 * 60 * 60 * 24));
}

// ============================================
// LOAD USER PROGRESS FROM FIRESTORE
// ============================================
async function loadUserProgress(uid) {
  try {
    const userDocRef = doc(db, "users", uid);
    const userDocSnap = await getDoc(userDocRef);
    
    const today = getTodayString();
    
    if (userDocSnap.exists()) {
      // User doc exists - load it
      userProgress = userDocSnap.data();
      
      // Apply streak rules
      const lastLogin = userProgress.lastLogin;
      if (lastLogin) {
        const diffDays = getDaysDiff(lastLogin, today);
        
        if (diffDays === 0) {
          // Same day - keep streak as is
        } else if (diffDays === 1) {
          // Consecutive day - increment streak
          userProgress.streak = (userProgress.streak || 0) + 1;
        } else {
          // Missed more than 1 day - reset streak
          userProgress.streak = 1;
        }
      }
      
      // Update lastLogin to today
      userProgress.lastLogin = today;
      
    } else {
      // No doc - create defaults
      userProgress = {
        xp: 0,
        streak: 1,
        lastLogin: today,
        lessonsCompleted: []
      };
    }
    
    // Save updated progress to Firestore
    await saveUserProgressToFirestore();
    
    // Sync to local app state
    syncProgressToApp();
    
    updateSaveStatus("Progress synced", "success");
    
  } catch (error) {
    console.error("Error loading user progress:", error);
    updateSaveStatus("Sync error", "error");
  }
}

// ============================================
// SAVE USER PROGRESS TO FIRESTORE
// ============================================
async function saveUserProgressToFirestore() {
  if (!currentUser || !userProgress) return;
  
  try {
    const userDocRef = doc(db, "users", currentUser.uid);
    await setDoc(userDocRef, userProgress, { merge: true });
    updateSaveStatus("Saved", "success");
  } catch (error) {
    console.error("Error saving user progress:", error);
    updateSaveStatus("Save failed", "error");
  }
}

// ============================================
// SYNC PROGRESS TO APP (update global variables)
// ============================================
function syncProgressToApp() {
  if (!userProgress) return;
  
  // Update global variables (defined in app.js)
  if (typeof window.xp !== 'undefined') {
    window.xp = userProgress.xp || 0;
  }
  if (typeof window.streak !== 'undefined') {
    window.streak = userProgress.streak || 0;
  }
  if (typeof window.lastLessonDate !== 'undefined') {
    window.lastLessonDate = userProgress.lastLogin;
  }
  if (typeof window.earnedBadges !== 'undefined' && userProgress.lessonsCompleted) {
    // Convert lessonsCompleted to badge format if needed
    window.earnedBadges = userProgress.lessonsCompleted.filter(id => id.includes('-complete'));
  }
  
  // Update UI
  updateUIFromProgress();
}

// ============================================
// SYNC APP STATE TO PROGRESS (before saving)
// ============================================
function syncAppToProgress() {
  if (!userProgress) {
    userProgress = {
      xp: 0,
      streak: 1,
      lastLogin: getTodayString(),
      lessonsCompleted: []
    };
  }
  
  // Pull from global app state
  if (typeof window.xp !== 'undefined') {
    userProgress.xp = window.xp;
  }
  if (typeof window.streak !== 'undefined') {
    userProgress.streak = window.streak;
  }
  if (typeof window.lastLessonDate !== 'undefined' && window.lastLessonDate) {
    userProgress.lastLogin = window.lastLessonDate;
  }
  if (typeof window.earnedBadges !== 'undefined') {
    // Merge badges into lessonsCompleted
    const badges = window.earnedBadges || [];
    const existing = new Set(userProgress.lessonsCompleted || []);
    badges.forEach(b => existing.add(b));
    userProgress.lessonsCompleted = Array.from(existing);
  }
}

// ============================================
// UPDATE UI FROM PROGRESS
// ============================================
function updateUIFromProgress() {
  if (!userProgress) return;
  
  const xpValue = document.getElementById("xpValue");
  const streakValue = document.getElementById("streakValue");
  const levelValue = document.getElementById("levelValue");
  const xpProgressMini = document.getElementById("xpProgressMini");
  
  if (xpValue) xpValue.textContent = userProgress.xp || 0;
  if (streakValue) streakValue.textContent = userProgress.streak || 0;
  
  // Calculate level (every 100 XP = 1 level)
  const level = Math.floor((userProgress.xp || 0) / 100) + 1;
  if (levelValue) levelValue.textContent = level;
  
  // Update XP progress bar
  if (xpProgressMini) {
    const xpInCurrentLevel = (userProgress.xp || 0) % 100;
    xpProgressMini.style.width = `${xpInCurrentLevel}%`;
  }
}

// ============================================
// UPDATE SAVE STATUS INDICATOR
// ============================================
function updateSaveStatus(text, type = "info") {
  const statusEl = document.getElementById("saveStatusText");
  if (statusEl) {
    statusEl.textContent = text;
    statusEl.className = "save-status-text";
    if (type === "success") statusEl.classList.add("save-status--success");
    if (type === "error") statusEl.classList.add("save-status--error");
    
    // Auto-clear success/error after 2s
    if (type !== "info") {
      setTimeout(() => {
        if (currentUser) {
          statusEl.textContent = "Synced";
          statusEl.className = "save-status-text save-status--success";
        }
      }, 2000);
    }
  }
}

// ============================================
// CLEAR PROGRESS ON LOGOUT
// ============================================
function clearProgressOnLogout() {
  userProgress = null;
  
  // Reset to defaults (or localStorage values)
  if (typeof window.xp !== 'undefined') window.xp = 0;
  if (typeof window.streak !== 'undefined') window.streak = 0;
  if (typeof window.earnedBadges !== 'undefined') window.earnedBadges = [];
  
  // Update UI
  const xpValue = document.getElementById("xpValue");
  const streakValue = document.getElementById("streakValue");
  const levelValue = document.getElementById("levelValue");
  const xpProgressMini = document.getElementById("xpProgressMini");
  
  if (xpValue) xpValue.textContent = "0";
  if (streakValue) streakValue.textContent = "0";
  if (levelValue) levelValue.textContent = "1";
  if (xpProgressMini) xpProgressMini.style.width = "0%";
  
  updateSaveStatus("Login to save progress", "info");
}

// ============================================
// AUTH UI HANDLERS
// ============================================
function setupAuthUI() {
  const emailInput = document.getElementById("authEmail");
  const passwordInput = document.getElementById("authPassword");
  const loginBtn = document.getElementById("loginBtn");
  const signupBtn = document.getElementById("signupBtn");
  const logoutBtn = document.getElementById("logoutBtn");
  
  // Login handler
  if (loginBtn) {
    loginBtn.addEventListener("click", async () => {
      const email = emailInput?.value?.trim();
      const password = passwordInput?.value;
      
      if (!email || !password) {
        alert("Please enter email and password");
        return;
      }
      
      try {
        loginBtn.disabled = true;
        loginBtn.textContent = "...";
        await signInWithEmailAndPassword(auth, email, password);
      } catch (error) {
        console.error("Login error:", error);
        alert("Login failed: " + error.message);
      } finally {
        loginBtn.disabled = false;
        loginBtn.textContent = "Log in";
      }
    });
  }
  
  // Signup handler
  if (signupBtn) {
    signupBtn.addEventListener("click", async () => {
      const email = emailInput?.value?.trim();
      const password = passwordInput?.value;
      
      if (!email || !password) {
        alert("Please enter email and password");
        return;
      }
      
      if (password.length < 6) {
        alert("Password must be at least 6 characters");
        return;
      }
      
      try {
        signupBtn.disabled = true;
        signupBtn.textContent = "...";
        await createUserWithEmailAndPassword(auth, email, password);
      } catch (error) {
        console.error("Signup error:", error);
        alert("Signup failed: " + error.message);
      } finally {
        signupBtn.disabled = false;
        signupBtn.textContent = "Sign up";
      }
    });
  }
  
  // Logout handler
  if (logoutBtn) {
    logoutBtn.addEventListener("click", async () => {
      try {
        await signOut(auth);
      } catch (error) {
        console.error("Logout error:", error);
      }
    });
  }
  
  // Enter key handler for inputs
  [emailInput, passwordInput].forEach(input => {
    if (input) {
      input.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
          loginBtn?.click();
        }
      });
    }
  });
}

// ============================================
// AUTH STATE CHANGE LISTENER
// ============================================
onAuthStateChanged(auth, async (user) => {
  const authLoggedOut = document.getElementById("authLoggedOut");
  const authLoggedIn = document.getElementById("authLoggedIn");
  const authUserEmail = document.getElementById("authUserEmail");
  
  if (user) {
    // User is signed in
    currentUser = user;
    
    // Update UI to show logged-in state
    if (authLoggedOut) authLoggedOut.classList.add("is-hidden");
    if (authLoggedIn) authLoggedIn.classList.remove("is-hidden");
    if (authUserEmail) authUserEmail.textContent = user.email;
    
    // Load user progress from Firestore
    updateSaveStatus("Syncing...", "info");
    await loadUserProgress(user.uid);
    
  } else {
    // User is signed out
    currentUser = null;
    
    // Update UI to show logged-out state
    if (authLoggedOut) authLoggedOut.classList.remove("is-hidden");
    if (authLoggedIn) authLoggedIn.classList.add("is-hidden");
    if (authUserEmail) authUserEmail.textContent = "";
    
    // Clear progress
    clearProgressOnLogout();
  }
});

// ============================================
// EXPOSE FIREBASE SAVE FUNCTION TO APP.JS
// ============================================
window.firebaseSaveProgress = async function() {
  if (!currentUser) return; // Only save if logged in
  
  syncAppToProgress();
  await saveUserProgressToFirestore();
};

// Add lesson to completed list
window.firebaseAddCompletedLesson = async function(lessonId) {
  if (!currentUser || !userProgress) return;
  
  if (!userProgress.lessonsCompleted) {
    userProgress.lessonsCompleted = [];
  }
  
  if (!userProgress.lessonsCompleted.includes(lessonId)) {
    userProgress.lessonsCompleted.push(lessonId);
    await saveUserProgressToFirestore();
  }
};

// Check if user is logged in
window.firebaseIsLoggedIn = function() {
  return currentUser !== null;
};

// ============================================
// INIT ON DOM READY
// ============================================
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", setupAuthUI);
} else {
  setupAuthUI();
}
