// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC-TrS0fBi1lqvCeIbtC-jf36Psg77eygY",
  authDomain: "fir-e2a85.firebaseapp.com",
  projectId: "fir-e2a85",
  storageBucket: "fir-e2a85.appspot.com",
  messagingSenderId: "307114019969",
  appId: "1:307114019969:web:6581d53858593b5d8cd180",
  measurementId: "G-YW9CH824W1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };