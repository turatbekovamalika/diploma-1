// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDi10lKyYvwkymqoUzs7UJoG3apV2n4e6E",
  authDomain: "diploma-5c1d2.firebaseapp.com",
  projectId: "diploma-5c1d2",
  storageBucket: "diploma-5c1d2.appspot.com",
  messagingSenderId: "575589830545",
  appId: "1:575589830545:web:79ba07088c1622c4fdd430",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

//получить список категорий (коллекция документов)
export const categoryCollection = collection(db, "categories");
