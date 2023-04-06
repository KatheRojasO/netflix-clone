import { addDoc, collection, query, where } from "firebase/firestore";
import { getDocs } from "firebase/firestore";
import { database } from "./firebase/firebaseSetup";

const collectionName = "users";
const usersCollection = collection(database, collectionName);

//Retrieve user by email
export async function getUser(email) {
  const emailQuery = query(usersCollection, where("email", "==", email));
  const querySnapshot = await getDocs(emailQuery);
  
  let userDocument = null;

  if (querySnapshot.docs.length > 0) {
    const queryDoc = querySnapshot.docs[0];
    userDocument = { id: queryDoc.id, ...queryDoc.data() };
  }
  return userDocument;
}

export async function setUser(user){
  const document = await addDoc(usersCollection, user);
  const result = document.id;
  return result;
}
