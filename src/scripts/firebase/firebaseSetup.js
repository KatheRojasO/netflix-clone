import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseSetup = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "netflix-clone-367f4.firebaseapp.com",
  projectId: "netflix-clone-367f4",
  storageBucket: "netflix-clone-367f4.appspot.com",
  messagingSenderId: process.env.REACT_APP_SENDER_ID ,
  appId: process.env.REACT_APP_APP_ID,
};

const firebaseApp = initializeApp(firebaseSetup);

export const auth = getAuth(firebaseApp);
export const database = getFirestore(firebaseApp);
export const cloudStorage = getStorage(firebaseApp);
