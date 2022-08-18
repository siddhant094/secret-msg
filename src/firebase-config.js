// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAkWoHNJcB9JWgag7KNIIyiSNvZGWkwAVc",
  authDomain: "secret-msg-68307.firebaseapp.com",
  projectId: "secret-msg-68307",
  storageBucket: "secret-msg-68307.appspot.com",
  messagingSenderId: "578915946130",
  appId: "1:578915946130:web:2f439651084082b380e04b",
  measurementId: "G-X5HXK60CGL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore();
