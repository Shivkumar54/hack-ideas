import React, { useState } from "react"
import { IoCalendarOutline } from "react-icons/io5"
import { AiOutlineLike, AiFillLike } from "react-icons/ai"
const HomeAllEvents = ({ data }) => {
  const [count, setCount] = useState(data.votes)
  const [clicked, setIsClicked] = useState(false)
  const handleChange = () => {
    setCount((prevcount) => prevcount + 1)
    setIsClicked(true)
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
          <span className="text-sm capitalize">categroy: {data?.category}</span>
          <div className="flex justify-between mt-1">
            <span
              onClick={handleChange}
              className={
                !clicked
                  ? "flex items-center gap-2 text-sm cursor-pointer"
                  : "flex items-center gap-2 text-sm cursor-pointer pointer-events-none"
              }
            >
              {!clicked ? (
                <AiOutlineLike size={25} />
              ) : (
                <AiFillLike size={25} className="text-green-500" />
              )}{" "}
              {count} votes
            </span>
            <span className="flex items-center gap-2 text-sm">
              <IoCalendarOutline size={20} /> {data?.date}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeAllEvents
