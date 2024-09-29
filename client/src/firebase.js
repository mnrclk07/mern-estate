// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-6c014.firebaseapp.com",
  projectId: "mern-estate-6c014",
  storageBucket: "mern-estate-6c014.appspot.com",
  messagingSenderId: "1071044117778",
  appId: "1:1071044117778:web:1db4a79d39c42c89ad5fcb",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
