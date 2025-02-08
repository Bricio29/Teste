import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { collection, addDoc, getDocs } from "@firebase/firestore"; // Perbarui ini


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVL3bErnadVvcBejp28Ar3qx12ZG4gBCc",
  authDomain: "portfolio-web-f2981.firebaseapp.com",
  projectId: "portfolio-web-f2981",
  storageBucket: "portfolio-web-f2981.firebasestorage.app",
  messagingSenderId: "68791174115",
  appId: "1:68791174115:web:f51094062c85576c22d6d6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc };