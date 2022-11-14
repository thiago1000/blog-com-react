import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAGzPiQIWAvnSg2KztMrSUljTJjVFIRk08",
  authDomain: "miniblog-aff8e.firebaseapp.com",
  projectId: "miniblog-aff8e",
  storageBucket: "miniblog-aff8e.appspot.com",
  messagingSenderId: "845178389712",
  appId: "1:845178389712:web:856e26504dae697455cad5"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };