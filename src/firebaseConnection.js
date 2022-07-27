import firebase from "firebase/compat/app";
import "firebase/compat/auth";  
import "firebase/compat/firestore";
 
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
 
  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }
 
  export default firebase;
