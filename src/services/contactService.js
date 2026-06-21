import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";

/**
 * Add a contact document to the "contacts" collection.
 * @param {Object} data - { name, email, phone, service, message }
 * @returns {Promise<string>} Document ID
 */
export const addContact = async (data) => {
  const contactsRef = collection(db, "contacts");
  const docRef = await addDoc(contactsRef, {
    ...data,
    createdAt: serverTimestamp(),
  });
  return docRef.id;
};
