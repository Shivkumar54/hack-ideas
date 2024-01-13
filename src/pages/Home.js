import React, { useState } from "react"
import HomeHeroSection from "../components/pageComponents/HomeHeroSection"
import HomeAllEvents from "../components/pageComponents/HomeAllEvents"
import { eventData } from "../data/eventData"
import { filterer } from "../constants/filterList"

const Home = () => {
  const data = eventData
  const filterList = filterer
  const [filterData, setFilterData] = useState(data)

  const handleClick = (name) => {
    if (name === "reset") {
      setFilterData(data)
    } else {
      const filtered = data.filter(
        (item) => item.category.toLowerCase() === name.toLowerCase()
      )
      setFilterData(filtered)
    }
  }

  const ltoH = () => {
    const newSort = [...filterData].sort((a, b) => a.votes - b.votes)
    setFilterData(newSort)
  }
  const htoL = () => {
    const newSort = [...filterData].sort((a, b) => b.votes - a.votes)
    setFilterData(newSort)
  }

  return (
    <div>
      <HomeHeroSection />
      <div className="lists mb-5">
        <h2 className="my-10 text-center uppercase font-semibold tracking-widest text-lg">
          On going Events{" "}
        </h2>
        {/* Filtering */}
        <div className="filtering flex">
          {filterList &&
            filterList?.map(({ name, id }) => {
              return (
                <button
                  className="mb-5 bg-gray-200 mr-3 w-28 py-2 rounded-md capitalize"
                  key={id}
                  onClick={() => handleClick(name)}
                >
                  {name}
                </button>
              )
            })}

          <div className="sorting">
            <button
              onClick={ltoH}
              className="mb-5 bg-gray-200 mr-3 w-28 py-2 rounded-md"
            >
              Low to high
            </button>
            <button
              onClick={htoL}
              className="mb-5 bg-gray-200 mr-3 w-28 py-2 rounded-md"
            >
              High to low
            </button>
          </div>
        </div>
        {/* Rendering */}
        <div className="grid grid-cols-4 gap-5">
          {filterData &&
            filterData?.map((items) => {
              return <HomeAllEvents key={items.id} data={items} />
            })}
        </div>
      </div>
    </div>
  )
}

export default Home
