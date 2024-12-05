// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDk0XmdnhX2FSyzSQsCXIv8XsNLFga1MEE",
  authDomain: "the-panorama-press.firebaseapp.com",
  projectId: "the-panorama-press",
  storageBucket: "the-panorama-press.firebasestorage.app",
  messagingSenderId: "479890734005",
  appId: "1:479890734005:web:960d0fdfbb3012123c77fc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth= getAuth(app);

export default auth;