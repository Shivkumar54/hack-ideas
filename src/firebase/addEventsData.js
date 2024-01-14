// addEventsData.js
import { collection, addDoc } from "firebase/firestore"
import { db } from "./firebase-config"

const addEventDataToFirestore = async (eventsDataa) => {
  try {
    for (const event of eventsDataa) {
      await addDoc(collection(db, "contest"), event)
    }
    console.log("Data added successfully!")
  } catch (error) {
    console.error("Error adding data:", error)
  }
}

export default addEventDataToFirestore
