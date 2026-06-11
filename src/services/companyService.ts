import { doc, getDoc } from "firebase/firestore";
import { db } from "./firebase";
import type { CompanySettings } from "../types/company";

export async function getCompanySettings(): Promise<CompanySettings | null> {
  try {
    const snapshot = await getDoc(
      doc(db, "settings", "company")
    );

    if (!snapshot.exists()) {
      return null;
    }

    return snapshot.data() as CompanySettings;
  } catch (error) {
    console.error(
      "Error loading company settings:",
      error
    );

    return null;
  }
}