import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";

export async function testFirestoreConnection() {
  try {
    const snapshot = await getDocs(collection(db, "_connection_test"));

    console.log("✅ Firestore connected successfully");
    console.log("Documents:", snapshot.size);

    return true;
  } catch (error) {
    console.error("❌ Firestore connection failed");
    console.error(error);

    return false;
  }
}