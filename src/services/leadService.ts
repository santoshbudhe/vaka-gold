import {
  collection,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";

import { db } from "./firebase";

import { Lead } from "../types/lead";

export async function createLead(
  lead: Omit<Lead, "createdAt">
) {
  try {
    await addDoc(
      collection(db, "leads"),
      {
        ...lead,
        createdAt: serverTimestamp(),
      }
    );

    return true;
  } catch (error) {
    console.error(error);
    throw error;
  }
}