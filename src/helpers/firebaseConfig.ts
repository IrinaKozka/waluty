// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMAQpNS__5U-KTbYhumhFqjGGGEug8XzU",
  authDomain: "przelicznik-57660.firebaseapp.com",
  projectId: "przelicznik-57660",
  storageBucket: "przelicznik-57660.appspot.com",
  messagingSenderId: "22857711878",
  appId: "1:22857711878:web:3ffa63e74ffe6c4df55e87",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);