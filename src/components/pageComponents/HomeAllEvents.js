import React, { useState, useEffect } from "react"
import { IoCalendarOutline } from "react-icons/io5"
import { AiOutlineLike, AiFillLike } from "react-icons/ai"
import { dateCleanup } from "../../constants/datecleanup"

const HomeAllEvents = ({ data, showIntreset, removeIntreset }) => {
  const cleanupDate = dateCleanup(data)
  const [count, setCount] = useState(data.votes)
  const [clicked, setIsClicked] = useState(data.isIntrested)

  useEffect(() => {
    setIsClicked(data.isIntrested)
    setCount(data.votes)
  }, [data.isIntrested, data.votes])

  const handleChange = () => {
    setIsClicked((prevValue) => !prevValue)
    if (clicked) {
      setCount((prevcount) => prevcount - 1)
      removeIntreset()
    } else {
      setCount((prevcount) => prevcount + 1)
      showIntreset()
    }
  }

  return (
    <div>
      <div className="shadow mb-5 h-[40vh] overflow-hidden rounded-lg">
        <img
          src={data?.img}
          alt={data?.title}
          className="w-full h-[23vh] object-cover "
        />
        <div className="txt px-2 pt-3">
          <h1 className="text-lg font-medium capitalize">{data?.title}</h1>
          <span className="text-sm capitalize">category: {data?.category}</span>
          <div className="flex justify-between mt-1">
            <span
              onClick={handleChange}
              className={"flex items-center gap-2 text-sm cursor-pointer"}
            >
              {clicked ? (
                <AiFillLike className="text-green-500" size={25} />
              ) : (
                <AiOutlineLike size={25} />
              )}
              {count} votes
            </span>
            <span className="flex items-center gap-2 text-sm">
              <IoCalendarOutline size={20} /> {cleanupDate}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeAllEvents
