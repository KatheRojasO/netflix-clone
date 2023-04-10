import { collection, doc } from "firebase/firestore";
import { getDocs, addDoc, updateDoc, deleteDoc } from "firebase/firestore";
import { database } from "./firebase/firebaseSetup";

const collectionName = "movies";
const moviesCollection = collection(database, collectionName);

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
