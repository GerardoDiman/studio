// src/lib/firebase.ts

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// Importa la función para inicializar Firestore
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your Web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3xg4vx8ieaA-LDjafWf1NYmRgNgBCjWc",
  authDomain: "dimans-intelligent-systems.firebaseapp.com",
  projectId: "dimans-intelligent-systems",
  storageBucket: "dimans-intelligent-systems.appspot.com",
  messagingSenderId: "704295478801",
  appId: "1:704295478801:web:4bd287a9b20a68db3073b0",
  measurementId: "G-7MGXW534KN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Conditionally initialize Analytics only on the client side
const analytics = typeof window !== 'undefined' ? getAnalytics(app) : null;

// Inicializa Cloud Firestore y obtén una instancia
const db = getFirestore(app);

// Exporta las instancias de los servicios que necesites usar
export { app, analytics, db };