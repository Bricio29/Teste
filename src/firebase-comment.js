import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { collection, addDoc } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDVL3bErnadVvcBejp28Ar3qx12ZG4gBCc",
    authDomain: "portfolio-web-f2981.firebaseapp.com",
    projectId: "portfolio-web-f2981",
    storageBucket: "portfolio-web-f2981.firebasestorage.app",
    messagingSenderId: "68791174115",
    appId: "1:68791174115:web:f51094062c85576c22d6d6"
  };

// Initialize with a unique name
const app = initializeApp(firebaseConfig, 'comments-app');
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage, collection, addDoc };