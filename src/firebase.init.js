// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQRvAnRpGI4EHyBtdiepV3pqDgunMRl8Y",
  authDomain: "photo-diary-de23a.firebaseapp.com",
  projectId: "photo-diary-de23a",
  storageBucket: "photo-diary-de23a.appspot.com",
  messagingSenderId: "924592125624",
  appId: "1:924592125624:web:d5647a1ef41d56f88f264d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
