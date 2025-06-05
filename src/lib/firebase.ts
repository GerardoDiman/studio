// src/lib/firebase.ts

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// Importa otros servicios de Firebase que necesites (ej: getAuth, getStorage)

// Tu configuración de Firebase (reemplaza con la que copiaste de la consola)
const firebaseConfig = {
  apiKey: "AIzaSyA3xg4vx8ieaA-LDjafWf1NYmRgNgBCjWc",
  authDomain: "dimans-intelligent-systems.firebaseapp.com",
  projectId: "dimans-intelligent-systems",
  storageBucket: "dimans-intelligent-systems.firebasestorage.app",
  messagingSenderId: "704295478801",
  appId: "1:704295478801:web:4bd287a9b20a68db3073b0",
  measurementId: "G-7MGXW534KN"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Obtén una instancia de Firestore (si lo vas a usar)
const db = getFirestore(app);

// Exporta las instancias de los servicios que necesites usar en otras partes de tu aplicación
export { db };
// export { auth } // Si usas Authentication
// export { storage } // Si usas Storage
