
'use client';
import {
  Auth,
  signInAnonymously,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  // Assume getAuth and app are initialized elsewhere
} from 'firebase/auth';

/** Initiate anonymous sign-in (non-blocking). */
export function initiateAnonymousSignIn(authInstance: Auth): void {
  // CRITICAL: Call signInAnonymously directly. Do NOT use 'await signInAnonymously(...)'.
  signInAnonymously(authInstance).catch(err => {
    // Optional: Log errors if needed, but don't block.
    console.error("Anonymous sign-in failed:", err);
  });
  // Code continues immediately. Auth state change is handled by onAuthStateChanged listener.
}

/** Initiate email/password sign-up (non-blocking). */
export function initiateEmailSignUp(authInstance: Auth, email: string, password: string): Promise<void> {
  // CRITICAL: Call createUserWithEmailAndPassword, but return the promise to the caller.
  return createUserWithEmailAndPassword(authInstance, email, password).then(() => {
    // This part is for success, which is handled by onAuthStateChanged.
    // The caller can use .catch() on the returned promise.
  });
}

/** Initiate email/password sign-in (non-blocking). */
export function initiateEmailSignIn(authInstance: Auth, email: string, password: string): Promise<void> {
  // CRITICAL: Call signInWithEmailAndPassword, but return the promise to the caller.
  return signInWithEmailAndPassword(authInstance, email, password).then(() => {
     // This part is for success, which is handled by onAuthStateChanged.
  });
}
