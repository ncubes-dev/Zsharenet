
import { initializeApp, getApp, getApps, } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";





const firebaseConfig = {
  apiKey: "AIzaSyBWKH_aZYv94CLJxA4ErrH1SMCIRQ27ffc",
  authDomain: "laundry-first.firebaseapp.com",
  projectId: "laundry-first",
  storageBucket: "laundry-first.appspot.com",
  messagingSenderId: "1044277393220",
  appId: "1:1044277393220:web:caf47df43540b51b854911",
  measurementId: "G-9RN1SP9NNW"
};

export const App = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const Auth = getAuth(App);
const Db = getFirestore(App);
const Storage = getStorage(App);


export { Auth, Db, Storage };




