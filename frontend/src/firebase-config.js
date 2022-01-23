// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD94mv19qDw4YnznelbvTNkF5k0Z14hndw",
  authDomain: "qml-pm.firebaseapp.com",
  projectId: "qml-pm",
  storageBucket: "qml-pm.appspot.com",
  messagingSenderId: "1031287403836",
  appId: "1:1031287403836:web:842279b4d3adc1dcb35a39"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider();