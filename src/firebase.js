import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyBeV-AQZNuUvR-bjgbgcZ1147gm-bSxENo",
    authDomain: "savistara-1c52f.firebaseapp.com",
    projectId: "savistara-1c52f",
    storageBucket: "savistara-1c52f.appspot.com",
    messagingSenderId: "311287790978",
    appId: "1:311287790978:web:345b05a602e635ac55239b"
  };

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
export { db };