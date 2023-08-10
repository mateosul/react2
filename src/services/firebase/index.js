import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDplRIIR78dz8hc8Qq5ZAounmKwwoJBjSw",
  authDomain: "react-ch-agustinabruzzi.firebaseapp.com",
  projectId: "react-ch-agustinabruzzi",
  storageBucket: "react-ch-agustinabruzzi.appspot.com",
  messagingSenderId: "877090876348",
  appId: "1:877090876348:web:3cdef7a15ca0b8bc5d19b9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)