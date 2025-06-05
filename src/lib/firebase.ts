// src/lib/firebase.ts

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// Importa otros servicios de Firebase que necesites (ej: getAuth, getStorage)

// Tu configuración de Firebase (reemplaza con la que copiaste de la consola)
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
  measurementId: "YOUR_MEASUREMENT_ID" // Si tienes Analytics
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Obtén una instancia de Firestore (si lo vas a usar)
const db = getFirestore(app);

// Exporta las instancias de los servicios que necesites usar en otras partes de tu aplicación
export { db };
// export { auth } // Si usas Authentication
// export { storage } // Si usas Storage
