import { initializeApp } from "firebase/app"
import { getFirestore } from "@firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyCbGeoBCYXNV-DvD8W0hmlsS6N8kEQ53c8",
  authDomain: "hack-ideas-a5137.firebaseapp.com",
  projectId: "hack-ideas-a5137",
  storageBucket: "hack-ideas-a5137.appspot.com",
  messagingSenderId: "67933369364",
  appId: "1:67933369364:web:51c772f0306733dbf22301",
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
