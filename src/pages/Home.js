import React, { useEffect, useState } from "react"
import HomeHeroSection from "../components/pageComponents/HomeHeroSection"
import HomeAllEvents from "../components/pageComponents/HomeAllEvents"
import { filterer } from "../constants/filterList"
import HomeSorting from "../components/pageComponents/HomeSorting"
import useFilterhook from "../hooks/useFilterhook"
import { collection, doc, getDocs, updateDoc } from "firebase/firestore"
import { db } from "../firebase/firebase-config"
import EventShimmer from "../components/mainComponents/EventShimmer"

const Home = () => {
  //?Imports
  const filterList = filterer

  const [eventList, setEventList] = useState([])

  const eventCollection = collection(db, "contests")

  const { filterData, ltoH, htoL, handleClick } = useFilterhook(
    eventList || null
  )
  useEffect(() => {
    getDataFromFirebase()
  }, [])
  useEffect(() => {
    const timer = setTimeout(() => {
      handleClick("reset")
    }, 1000)
    return () => timer
  }, [eventList])

  const getDataFromFirebase = async () => {
    const eventData = await getDocs(eventCollection)
    setEventList(eventData.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
  }

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

  return (
    <div>
      <HomeHeroSection />
      <div className="lists mb-5">
        <h2 className="my-10 text-center uppercase font-semibold tracking-widest text-lg">
          On going Events{" "}
        </h2>

        <HomeSorting
          handleClick={handleClick}
          ltoH={ltoH}
          htoL={htoL}
          filterList={filterList}
        />

        {filterData <= 0 && <EventShimmer />}
        <div className="grid grid-cols-4 gap-5">
          {filterData &&
            filterData?.map((items) => {
              return (
                <HomeAllEvents
                  key={items?.id}
                  data={items}
                  showIntreset={() =>
                    showIntreset(items?.id, items?.votes, items?.isIntrested)
                  }
                  removeIntreset={() =>
                    removeIntreset(items?.id, items?.votes, items?.isIntrested)
                  }
                />
              )
            })}
        </div>
      </div>
    </div>
  )
}

export default Home
