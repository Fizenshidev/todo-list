// Import dari Firebase SDK
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Konfigurasi Firebase kamu — ganti dengan info dari Firebase Console
const firebaseConfig = {
  apiKey: "AIzaSyCDi8crjsRbJ81mis_m75CLnKja_QUOutY",
  authDomain: "todolist-9bbde.firebaseapp.com",
  projectId: "todolist-9bbde",
  storageBucket: "todolist-9bbde.firebasestorage.app",
  messagingSenderId: "609660726800",
  appId: "1:609660726800:web:3aa774c5a1c176bf2f6495",
  measurementId: "G-9E3VEB37QS"
};

// Inisialisasi Firebase app
const app = initializeApp(firebaseConfig);

// Inisialisasi Firestore
const db = getFirestore(app);

// Export db supaya bisa dipakai di file lain
export { db };