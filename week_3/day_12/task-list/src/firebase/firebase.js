// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQe1cg0s475GVrYVruVj5k5fI_yx_QdA8",
  authDomain: "task-list-s2-3bdf5.firebaseapp.com",
  projectId: "task-list-s2-3bdf5",
  storageBucket: "task-list-s2-3bdf5.appspot.com",
  messagingSenderId: "585922290699",
  appId: "1:585922290699:web:cde0399b919ef302bbd30e",
  measurementId: "G-0GJ3SWK1ZZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
