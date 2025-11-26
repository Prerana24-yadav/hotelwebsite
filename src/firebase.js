// src/firebase.js
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDlBdefEOsLd2WK6sx4HcGPbEW-6Z8Nwdo",
  authDomain: "hotelapp-de9be.firebaseapp.com",
  databaseURL: "https://hotelapp-de9be-default-rtdb.firebaseio.com",
  projectId: "hotelapp-de9be",
  storageBucket: "hotelapp-de9be.appspot.com", // ✅ fixed line
  messagingSenderId: "869028484785",
  appId: "1:869028484785:web:1a4c5f241f12358d6bf490",
  measurementId: "G-C653NV91ZK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Initialize Realtime Database
export const database = getDatabase(app);
