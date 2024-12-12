// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB6kIZD6EqWk4D19JIHT99LspAgjmTH6_0",
  authDomain: "netflixgpt-8bd6a.firebaseapp.com",
  projectId: "netflixgpt-8bd6a",
  storageBucket: "netflixgpt-8bd6a.firebasestorage.app",
  messagingSenderId: "835221257907",
  appId: "1:835221257907:web:8318308ff3a0c2bde8fac6",
  measurementId: "G-VVK310M4Z3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();