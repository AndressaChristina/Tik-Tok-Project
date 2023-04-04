
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: "AIzaSyD2LRHBvVZFYpRzBd6z1bVlLQ1GMcUVhb0",
  authDomain: "tiktok---jornada-e6d7b.firebaseapp.com",
  projectId: "tiktok---jornada-e6d7b",
  storageBucket: "tiktok---jornada-e6d7b.appspot.com",
  messagingSenderId: "52730035100",
  appId: "1:52730035100:web:cb26763722d195cf9f2659"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;




