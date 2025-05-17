// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3vjB4P2djkB-8E-bc4WldAwpXeK1sS8A",
  authDomain: "login-signup-105f5.firebaseapp.com",
  projectId: "login-signup-105f5",
  storageBucket: "login-signup-105f5.firebasestorage.app",
  messagingSenderId: "705895674692",
  appId: "1:705895674692:web:cce60dea31a7c7c5dd1d11",
  measurementId: "G-FHNZ7XJLGN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth=getAuth()
export const db=getFirestore(app)
export default app