import React from "react"
import { useNavigate } from "react-router-dom"

const EventLister = () => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate("/")
  }

  return (
    <div className="flex flex-col justify-center items-center h-[90vh]">
      <h1 className="uppercase text-xl font-medium tracking-widest">
        Add new Contest or Event
      </h1>
      <form className="bg-white w-4/5  p-5 m-2 grid grid-cols-2 gap-4">
        <input
          className="border border-black w-full p-2 outline-none rounded"
          type="text"
          placeholder="Event Title"
        />
        <input
          className="border border-black w-full p-2 outline-none rounded"
          type="text"
          placeholder="Name of Organiser"
        />
        <input
          className="border border-black w-full p-2 outline-none rounded"
          type="url"
          placeholder="Enter Image URL"
        />
        <select
          className="border border-black w-full p-2 outline-none rounded"
          name=""
          id=""
        >
          <option value="select">Select Event Category</option>
          <option value="tech">Tech</option>
          <option value="feature">Feature</option>
          <option value="activity">Activity</option>
        </select>
        <input
          className="border border-black w-full p-2 outline-none rounded"
          type="number"
          min="0"
          placeholder="People Intrested"
        />
        <input
          className="border border-black w-full p-2 outline-none rounded"
          type="date"
          placeholder="Event date "
        />

        <textarea
          className="col-span-2 border border-black w-full p-2 outline-none rounded"
          cols="20"
          rows="5"
          placeholder="Short description about the event"
        ></textarea>
        <button
          onClick={handleClick}
          className="bg-green-500 col-auto w-48 h-12 text-white py-2 px-3 rounded"
        >
          Add New Event
        </button>
      </form>
    </div>
  )
}

export default EventLister
