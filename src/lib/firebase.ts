
// src/lib/firebase.ts
import { initializeApp, type FirebaseApp } from "firebase/app";
import { getAnalytics, type Analytics } from "firebase/analytics";
import { getFirestore, type Firestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your Web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3xg4vx8ieaA-LDjafWf1NYmRgNgBCjWc", // ¡¡VERIFICA ESTE VALOR!! Compara cuidadosamente con tu consola de Firebase. Si este valor no es el correcto y válido para tu proyecto, Firestore fallará.
  authDomain: "dimans-intelligent-systems.firebaseapp.com",
  projectId: "dimans-intelligent-systems", // ¡¡VERIFICA ESTE VALOR!! Asegúrate que sea el ID de proyecto correcto.
  storageBucket: "dimans-intelligent-systems.firebasestorage.app", // Corregido para coincidir con la consola
  messagingSenderId: "704295478801",
  appId: "1:704295478801:web:4bd287a9b20a68db3073b0",
  measurementId: "G-7MGXW534KN"
};

// Imprime la configuración en la consola para depuración.
// Compara estos valores cuidadosamente con los de tu consola de Firebase.
console.log("Firebase Config being used by the app:", JSON.stringify(firebaseConfig, null, 2));

let app: FirebaseApp;
let analytics: Analytics | null = null;
let db: Firestore;

try {
  app = initializeApp(firebaseConfig);
  console.log("Firebase App initialized:", app.name);

  if (typeof window !== 'undefined') {
    analytics = getAnalytics(app);
    console.log("Firebase Analytics initialized.");
  }

  db = getFirestore(app);
  console.log("Firebase Firestore instance initialized. Project ID from Firestore instance:", db.app.options.projectId);
} catch (error) {
  console.error("CRITICAL: Error initializing Firebase. Firestore will not work.", error);
  // Asignar un valor que indique fallo si es necesario, o lanzar el error.
  // Para este caso, si db no se inicializa, las operaciones fallarán y ya tenemos un console.error.
  // @ts-ignore: db might not be assigned if initializeApp fails, handle downstream.
  db = null;
}

// Exporta las instancias de los servicios que necesites usar
export { app, analytics, db };
