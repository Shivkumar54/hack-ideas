import { doc, updateDoc } from "firebase/firestore"
import { db } from "../firebase/firebase-config"

const useCandidateIntreset = () => {
  const showIntreset = async (id, votes, isIntrested) => {
    const eventDocs = doc(db, "contests", id)
    const updatedVote = { votes: votes + 1, isIntrested: !isIntrested }
    await updateDoc(eventDocs, updatedVote)
  }
  const removeIntreset = async (id, votes, isIntrested) => {
    const eventDocs = doc(db, "contests", id)
    const updatedVote = { votes: votes - 1, isIntrested: !isIntrested }
    await updateDoc(eventDocs, updatedVote)
  }

  return { showIntreset, removeIntreset }
}

export default useCandidateIntreset
