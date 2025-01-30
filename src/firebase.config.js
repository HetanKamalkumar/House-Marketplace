// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAdRZSamQtZWMl9re247zGDwnOHpwij3aY",
  authDomain: "house-marketplace-app-3c934.firebaseapp.com",
  projectId: "house-marketplace-app-3c934",
  storageBucket: "house-marketplace-app-3c934.firebasestorage.app",
  messagingSenderId: "231677085930",
  appId: "1:231677085930:web:2144a96fa0acd2309e2f93",
  measurementId: "G-XPJE75C759"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line
const analytics = getAnalytics(app);
export const db = getFirestore();