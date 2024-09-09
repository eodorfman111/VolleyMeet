// services/firebaseConfig.js

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBBc2_u8GF3heYTIrWEtCphPdrACRXqImI",
  authDomain: "volleymeet.firebaseapp.com",
  projectId: "volleymeet",
  storageBucket: "volleymeet.appspot.com",
  messagingSenderId: "649481747079",
  appId: "1:649481747079:web:324135b9f59b50710fd622",
  measurementId: "G-5TXQ85PJ91"
};


const app = initializeApp(firebaseConfig);


const db = getFirestore(app);

export { db };
