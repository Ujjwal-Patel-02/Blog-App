// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "blog-mern-3a46c.firebaseapp.com",
  projectId: "blog-mern-3a46c",
  storageBucket: "blog-mern-3a46c.appspot.com",
  messagingSenderId: "202267372974",
  appId: "1:202267372974:web:f60ca8b4a7dd05e7fdac3f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);