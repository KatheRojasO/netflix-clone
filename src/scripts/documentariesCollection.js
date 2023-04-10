import { collection, doc } from "firebase/firestore";
import { getDocs, addDoc, updateDoc, deleteDoc } from "firebase/firestore";
import { database } from "./firebase/firebaseSetup";

const collectionName = "documentaries";
const documentariesCollection = collection(database, collectionName);

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
