import React, { useEffect, useState } from "react"
import HomeHeroSection from "../components/pageComponents/HomeHeroSection"
import HomeAllEvents from "../components/pageComponents/HomeAllEvents"
import { filterer } from "../constants/filterList"
import HomeSorting from "../components/pageComponents/HomeSorting"
import useFilterhook from "../hooks/useFilterhook"
import EventShimmer from "../components/mainComponents/EventShimmer"
import useGetDatafromFirebase from "../hooks/useGetDatafromFirebase"
import useCandidateIntreset from "../hooks/useCandidateIntreset"

const Home = () => {
  //?Imports
  const filterList = filterer
  const [eventList, setEventList] = useState([])
  const { showIntreset, removeIntreset } = useCandidateIntreset()
  const getDataFromFirebase = useGetDatafromFirebase({ setEventList })

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
