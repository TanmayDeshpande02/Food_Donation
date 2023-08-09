
import { initializeApp } from "firebase/app";
import { getFirestore, collection} from "firebase/firestore"
// , onSnapshot,
//   addDoc, deleteDoc, doc,
//   query, where,
//   orderBy, serverTimestamp,
//   updateDoc
const firebaseConfig = {
  apiKey: "AIzaSyDcbGKlN-IWLcmArDtUs52SVp9Qigc9_8U",
  authDomain: "food-donation-55512.firebaseapp.com",
  projectId: "food-donation-55512",
  storageBucket: "food-donation-55512.appspot.com",
  messagingSenderId: "304744970869",
  appId: "1:304744970869:web:ae863646f6352cb3a4d63c",
  measurementId: "G-Y7KV7MR5QJ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const colRef = collection(db, 'RawFood');



