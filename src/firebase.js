// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || ""
};

const hasFirebaseConfig = Object.values(firebaseConfig).every((value) => value && value.trim() !== "");

let app = null;
let auth = null;
let db = null;

if (hasFirebaseConfig) {
  app = initializeApp(firebaseConfig);
  auth = getAuth(app);
  db = getFirestore(app);
}

const provider = new GoogleAuthProvider();

export const loginWithGoogle = async () => {
  if (!auth || !hasFirebaseConfig) {
    console.warn("Firebase is not configured. Add VITE_FIREBASE_* values to enable Google login.");
    return null;
  }

  return signInWithPopup(auth, provider);
};

export const logout = async () => {
  if (!auth || !hasFirebaseConfig) {
    return null;
  }

  return signOut(auth);
};

export { auth, db };
