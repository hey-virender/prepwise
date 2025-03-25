import { initializeApp,getApp,getApps } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCabj8gQqiCQ9hHeLHWqJhvqiXomgyfy24",
  authDomain: "prepwise-53237.firebaseapp.com",
  projectId: "prepwise-53237",
  storageBucket: "prepwise-53237.firebasestorage.app",
  messagingSenderId: "335958471322",
  appId: "1:335958471322:web:72b8244266faa2b8bee523",
  measurementId: "G-PXBY2WZDFQ"
};

// Initialize Firebase
const app =!getApps().length ? initializeApp(firebaseConfig):getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
export const analytics = getAnalytics(app);