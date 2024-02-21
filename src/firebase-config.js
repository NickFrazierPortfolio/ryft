// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC1KExdDojis-bax0XnQR5Ul1juMWa7bWw",
  authDomain: "ryft-b0a4a.firebaseapp.com",
  projectId: "ryft-b0a4a",
  storageBucket: "ryft-b0a4a.appspot.com",
  messagingSenderId: "68464867939",
  appId: "1:68464867939:web:830a772fb1e3c71e4e5656",
  measurementId: "G-ZNHREKEPJF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { db };