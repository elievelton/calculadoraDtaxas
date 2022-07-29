// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCuhCh-oqRkT5LZs7UJjJlAM3X1TRBKwts",
  authDomain: "calculadoradetaxas.firebaseapp.com",
  projectId: "calculadoradetaxas",
  storageBucket: "calculadoradetaxas.appspot.com",
  messagingSenderId: "398881234851",
  appId: "1:398881234851:web:cd59e9183a2318410f8416",
  measurementId: "G-K9T0TV1Q6F"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
export{db};