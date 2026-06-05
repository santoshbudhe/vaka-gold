import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBkSWr38381BtAfDP05bYT7t4YPmD90NC4",
  authDomain: "vaka-gold-f9d7b.firebaseapp.com",
  projectId: "vaka-gold-f9d7b",
  storageBucket: "vaka-gold-f9d7b.firebasestorage.app",
  messagingSenderId: "6183814549",
  appId: "1:6183814549:web:df11d10d9f7b52a598a29c",
  measurementId: "G-RYR7M13NC7",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;