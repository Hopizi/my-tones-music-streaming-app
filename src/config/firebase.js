import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
import {getStorage} from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyDk2CN1uW2soreKWaJTQ_uTvQgbrU_Rk5s",
  authDomain: "my-tones-streaming-app.firebaseapp.com",
  projectId: "my-tones-streaming-app",
  storageBucket: "my-tones-streaming-app.appspot.com",
  messagingSenderId: "348998066105",
  appId: "1:348998066105:web:393d94d0f473682e05a068",
  measurementId: "G-ZCQWPYN4MR"
};

 
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);