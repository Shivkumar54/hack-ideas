import { addDoc, collection } from "firebase/firestore"
import React, { useState } from "react"
import { db } from "../firebase/firebase-config"
import { useNavigate } from "react-router-dom"
import EventListerForm from "../components/pageComponents/EventListerForm"
const EventLister = () => {
  const navigate = useNavigate()
  const eventCollection = collection(db, "contests")

  const [title, setTitle] = useState("")
  const [author, setAuthor] = useState("")
  const [image, setImage] = useState("")
  const [votes, setVotes] = useState(0)
  const [eventDate, setEventDate] = useState("")
  const [description, setDescription] = useState("")
  const [category, setCategory] = useState("")

  const pushToFirebase = async (e) => {
    e.preventDefault()
    if (
      title &&
      votes &&
      eventDate &&
      author &&
      image &&
      description &&
      category
    ) {
      await addDoc(eventCollection, {
        title: title,
        img: image,
        desc: description,
        category: category,
        votes: Number(votes),
        date: eventDate,
        isIntrested: false,
        author: author,
      })
      navigate("/")
    } else {
      alert("Please Enter all the details")
    }
  }
  
  return (
    <div className="flex flex-col justify-center items-center h-[90vh] w-full">
      <h1 className="uppercase text-xl font-medium tracking-widest">
        Add new Contest or Event
      </h1>
      <EventListerForm
        pushToFirebase={pushToFirebase}
        setDescription={setDescription}
        setEventDate={setEventDate}
        setVotes={setVotes}
        setCategory={setCategory}
        setImage={setImage}
        setTitle={setTitle}
        setAuthor={setAuthor}
      />
    </div>
  )
}

export default EventLister
