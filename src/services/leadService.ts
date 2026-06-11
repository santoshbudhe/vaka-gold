import {
addDoc,
collection,
getDocs,
orderBy,
query,
serverTimestamp,
doc,
updateDoc,
} from "firebase/firestore";

import { db } from "./firebase";

import type { Lead } from "../types/lead";

export async function createLead(
lead: Omit<Lead, "createdAt">
) {
await addDoc(
collection(db, "leads"),
{
...lead,
createdAt: serverTimestamp(),
}
);
}

export async function getLeads() {
const q = query(
collection(db, "leads"),
orderBy("createdAt", "desc")
);

const snapshot =
await getDocs(q);

return snapshot.docs.map((doc) => ({
id: doc.id,
...doc.data(),
}));
}

export async function updateLeadStatus(
documentId: string,
status:
| "new"
| "contacted"
| "converted"
) {
await updateDoc(
doc(db, "leads", documentId),
{
status,
}
);
}
