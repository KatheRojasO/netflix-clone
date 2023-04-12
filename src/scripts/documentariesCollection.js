import { collection, doc } from "firebase/firestore";
import { getDocs, addDoc, updateDoc, deleteDoc } from "firebase/firestore";
import { database } from "./firebase/firebaseSetup";

const collectionName = "documentaries";
const documentariesCollection = collection(database, collectionName);

//Create a collection
export async function createDocumentary(data) {
  const document = await addDoc(documentariesCollection, data);
  const result = document.id;
  return result;
}

//Read documents in the collection
export async function readDocumentaries() {
  const querySnapshot = await getDocs(documentariesCollection);
  const result = [];
  querySnapshot.forEach((doc) => {
    const document = { id: doc.id, ...doc.data() };
    result.push(document);
  });
  return result;
}

//Update documents in the collection
export async function updateDocumentary(documentToUpdate) {
  const id = documentToUpdate.id;
  const reference = doc(database, collectionName, id);
  await updateDoc(reference, documentToUpdate);
  return id;
}

//Delete a document in the collection
export async function deleteDocumentary(id) {
  const reference = doc(database, collectionName, id);
  await deleteDoc(reference);
  return id;
}
