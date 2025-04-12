// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCDi8crjsRbJ81mis_m75CLnKja_QUOutY",
  authDomain: "todolist-9bbde.firebaseapp.com",
  projectId: "todolist-9bbde",
  storageBucket: "todolist-9bbde.firebasestorage.app",
  messagingSenderId: "609660726800",
  appId: "1:609660726800:web:3aa774c5a1c176bf2f6495",
  measurementId: "G-9E3VEB37QS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
