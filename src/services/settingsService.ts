import { doc, getDoc } from "firebase/firestore";
import { db } from "./firebase";

export async function getCompanySettings() {
  const snapshot = await getDoc(
    doc(db, "settings", "company")
  );

  if (!snapshot.exists()) {
    return null;
  }

  return snapshot.data();
}