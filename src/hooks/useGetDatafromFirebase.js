import { collection, getDocs } from "firebase/firestore"
import { db } from "../firebase/firebase-config"

const useGetDatafromFirebase = ({ setEventList }) => {
  const eventCollection = collection(db, "contests")
  const getDataFromFirebase = async () => {
    const eventData = await getDocs(eventCollection)
    setEventList(eventData.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
  }

  return getDataFromFirebase
}

export default useGetDatafromFirebase
