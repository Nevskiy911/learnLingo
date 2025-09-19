import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCw33rhfnuRs6QjAzJ5NLmeMqq4i3sQuws",
  authDomain: "learn-lingo-3e7ba.firebaseapp.com",
  databaseURL:
    "https://learn-lingo-3e7ba-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "learn-lingo-3e7ba",
  storageBucket: "learn-lingo-3e7ba.firebasestorage.app",
  messagingSenderId: "970566827532",
  appId: "1:970566827532:web:8b6c4cfc2ce925f0087829",
  measurementId: "G-6Z5FY91XTT",
};

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
