// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBnJwraPAeZEEDpcAGxZzComRolcQI6fmA",
  authDomain: "netflixgpt-9ce01.firebaseapp.com",
  projectId: "netflixgpt-9ce01",
  storageBucket: "netflixgpt-9ce01.firebasestorage.app",
  messagingSenderId: "923869010137",
  appId: "1:923869010137:web:51e55f5e1bf009b4f446c8",
  measurementId: "G-N51MF2HYWS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
