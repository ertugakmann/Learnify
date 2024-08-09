// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBATMQr3nX45DrehLQEeJqfLzpVLP0m4oc",
  authDomain: "learnify-2843d.firebaseapp.com",
  projectId: "learnify-2843d",
  storageBucket: "learnify-2843d.appspot.com",
  messagingSenderId: "1085403370418",
  appId: "1:1085403370418:web:51320f404a5c15dead8aab",
};

// Initialize Firebase
export const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const db = getFirestore(app);
