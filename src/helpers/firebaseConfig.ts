import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
<<<<<<< HEAD
import { getStorage } from 'firebase/storage';

=======
import {getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
>>>>>>> babef9c08ad069f2d9763c14e7543855bb332a7a
const firebaseConfig = {
  apiKey: 'AIzaSyDMAQpNS__5U-KTbYhumhFqjGGGEug8XzU',
  authDomain: 'przelicznik-57660.firebaseapp.com',
  projectId: 'przelicznik-57660',
  storageBucket: 'przelicznik-57660.appspot.com',
  messagingSenderId: '22857711878',
  appId: '1:22857711878:web:3ffa63e74ffe6c4df55e87',
};

<<<<<<< HEAD
=======
// Initialize Firebase
>>>>>>> babef9c08ad069f2d9763c14e7543855bb332a7a
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
