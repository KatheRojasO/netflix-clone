import { collection, doc } from "firebase/firestore";
import { getDocs, addDoc, updateDoc, deleteDoc } from "firebase/firestore";
import { database } from "./firebase/firebaseSetup";

const collectionName = "series";
const seriesCollection = collection(database, collectionName);

//Create a collection
export async function createSeries(data) {
  const document = await addDoc(seriesCollection, data);
  const result = document.id;
  return result;
}

//Read documents in the collection
export async function readSeries() {
  const querySnapshot = await getDocs(seriesCollection);
  const result = [];
  querySnapshot.forEach((doc) => {
    const document = { id: doc.id, ...doc.data() };
    result.push(document);
  });
  return result;
}

//Update documents in the collection
export async function updateSeries(documentToUpdate) {
  const id = documentToUpdate.id;
  const reference = doc(database, collectionName, id);
  await updateDoc(reference, documentToUpdate);
  return id;
}

//Delete a document in the collection
export async function deleteSeries(id) {
  const reference = doc(database, collectionName, id);
  await deleteDoc(reference);
  return id;
}

