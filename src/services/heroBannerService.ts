import { doc, getDoc } from "firebase/firestore";
import { db } from "./firebase";

export async function getHeroBanner(id: string) {
  const snapshot = await getDoc(
    doc(db, "heroBanners", id)
  );

  if (!snapshot.exists()) {
    return null;
  }

  return snapshot.data();
}