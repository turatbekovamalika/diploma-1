// Импорт необходимых функций из SDK
import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";
import {
  GoogleAuthProvider,
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";

// Конфигурация вашего Firebase-приложения
const firebaseConfig = {
  apiKey: "AIzaSyDi10lKyYvwkymqoUzs7UJoG3apV2n4e6E",
  authDomain: "diploma-5c1d2.firebaseapp.com",
  projectId: "diploma-5c1d2",
  storageBucket: "diploma-5c1d2.appspot.com",
  messagingSenderId: "575589830545",
  appId: "1:575589830545:web:79ba07088c1622c4fdd430",
};

// Инициализация Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

// Экспорт коллекций и auth
export const categoryCollection = collection(db, "categories");
export const productCollection = collection(db, "products");
export const orderCollection = collection(db, "orders");
const provider = new GoogleAuthProvider();
export const logIn = () => signInWithPopup(auth, provider);
export const logOut = () => signOut(auth);
export const onAuthChange = (callback) => onAuthStateChanged(auth, callback);
