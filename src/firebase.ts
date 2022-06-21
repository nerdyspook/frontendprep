import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC6XvM-ZZCbpBCExexyha_lGfHVQT-bbjE",
  authDomain: "frontendprep-neog.firebaseapp.com",
  projectId: "frontendprep-neog",
  storageBucket: "frontendprep-neog.appspot.com",
  messagingSenderId: "500130719838",
  appId: "1:500130719838:web:75420168a339869ad3eccf",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
