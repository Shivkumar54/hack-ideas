import React, { useState } from "react"
import { IoCalendarOutline } from "react-icons/io5"
import { AiOutlineLike, AiFillLike } from "react-icons/ai"
const HomeAllEvents = ({ data, showIntreset, removeIntreset }) => {
  const [count, setCount] = useState(data.votes)
  const [clicked, setIsClicked] = useState(false)
  const handleChange = () => {
    setIsClicked((prevValue) => !prevValue)
    if (clicked === true) {
      setCount((prevcount) => prevcount - 1)
      showIntreset()
    } else {
      setCount((prevcount) => prevcount + 1)
      removeIntreset()
    }
  }

  const uiDate = data.date

  const date = new Date(uiDate)
  const eventDate = date.getDate()
  const month = date.getMonth() + 1
  const year = date.getFullYear()
  const cleanupDate = `${eventDate}-${month}-${year}`
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
              className={"flex items-center gap-2 text-sm cursor-pointer"}
            >
              {clicked && <AiFillLike className="text-green-500" size={25} />}
              {!clicked && <AiOutlineLike size={25} />}
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

// {
//   !clicked && !data?.isIntrested ? (
//     <AiOutlineLike size={25} />
//   ) : (
//     <AiFillLike size={25} className="text-green-500" />
//   )
// }
