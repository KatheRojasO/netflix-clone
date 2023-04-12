import { collection, doc } from "firebase/firestore";
import { getDocs, addDoc, updateDoc, deleteDoc } from "firebase/firestore";
import { database } from "./firebase/firebaseSetup";

const collectionName = "movies";
const moviesCollection = collection(database, collectionName);

//Create a collection
export async function createMovie(data) {
  const document = await addDoc(moviesCollection, data);
  const result = document.id;
  return result;
}

//Read documents in the collection
export async function readMovies() {
  const querySnapshot = await getDocs(moviesCollection);
  const result = [];
  querySnapshot.forEach((doc) => {
    const document = { id: doc.id, ...doc.data() };
    result.push(document);
  });
  return result;
}

//Update documents in the collection
export async function updateMovie(documentToUpdate) {
  const id = documentToUpdate.id;
  const reference = doc(database, collectionName, id);
  await updateDoc(reference, documentToUpdate);
  return id;
}

//Delete a document in the collection
export async function deleteMovie(id) {
  const reference = doc(database, collectionName, id);
  await deleteDoc(reference);
  return id;
}
