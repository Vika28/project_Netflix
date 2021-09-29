import Firebase from 'firebase/compat/app';
import 'firebase/firestore';
import 'firebase/auth';
import { getFirestore } from "firebase/firestore";

const config = {
    apiKey: "AIzaSyBGVxG3idO6SLb1KvIc8VL6Kzbfx9k5_b0",
    authDomain: "netflix-4ad51.firebaseapp.com",
    projectId: "netflix-4ad51",
    storageBucket: "netflix-4ad51.appspot.com",
    messagingSenderId: "956142069791",
    appId: "1:956142069791:web:55149067ed2fb7092dcd2a",
    measurementId: "G-42EYPTVWFV"
};

const firebase = Firebase.initializeApp(config);
const db = getFirestore();
export { db };
export { firebase };