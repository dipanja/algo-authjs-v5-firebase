import { initializeApp, getApp, getApps } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

export function getFirebaseAuth() {
  if (!getApps().length) {
    const firebaseConfig = {
      apiKey: process.env.FIREBASE_API_KEY,
      authDomain: process.env.FIREBASE_AUTH_DOMAIN,
      projectId: process.env.FIREBASE_PROJECT_ID,
      storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
      appId: process.env.FIREBASE_APP_ID,
    };
    const app = initializeApp(firebaseConfig);
    return getAuth(app);
  } else {
    const app = getApp();
    return getAuth(app);
  }
}

export async function loginWithEmail(email, password) {
  const auth = getFirebaseAuth();
  try {
    const user = await signInWithEmailAndPassword(auth, email, password);
    return user.user;
  } catch (error) {
    // console.error(error);
    // console.log(error.code);
    throw error;
  }
}

export async function signUpWithEmail(email, password) {
  const auth = getFirebaseAuth();
  try {
    const user = await createUserWithEmailAndPassword(auth, email, password);
    return user.user;
  } catch (error) {
    // console.log(error.code);
    // throw new Error("email exists or password too small.");
    throw error;
    // const msg = e.code;
    // console.log(msg);
    // throw new Error("asdfasdf");
  }
}
