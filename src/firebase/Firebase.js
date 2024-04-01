// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA9mfuhZqzlwBnD11wQcovXYXMUT-xW97U",
  authDomain: "portfolio2k24.firebaseapp.com",
  projectId: "portfolio2k24",
  storageBucket: "portfolio2k24.appspot.com",
  messagingSenderId: "508449241393",
  appId: "1:508449241393:web:1eb7b0c8ba79926cd6d810",
  measurementId: "G-N4DMNX280V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export default db;