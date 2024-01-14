import React from "react"

const EventListerForm = ({
  pushToFirebase,
  setDescription,
  setEventDate,
  setVotes,
  setCategory,
  setImage,
  setAuthor,
  setTitle,
}) => {
  return (
    <div className="w-4/5">
      <form className="bg-white p-5 m-4 grid grid-cols-2 gap-4">
        <input
          onChange={(e) => setTitle(e.target.value)}
          className="border border-black w-full p-4 outline-none rounded"
          type="text"
          placeholder="Event Title"
          required
        />
        <input
          onChange={(e) => setAuthor(e.target.value)}
          className="border border-black w-full p-4 outline-none rounded"
          type="text"
          placeholder="Name of Organiser / Author"
          required
        />
        <input
          onChange={(e) => setImage(e.target.value)}
          className="border border-black w-full p-4 outline-none rounded"
          type="url"
          placeholder="Enter Image URL"
          required
        />
        <select
          onChange={(e) => setCategory(e.target.value)}
          className="border border-black w-full p-4 outline-none rounded"
          name=""
          id=""
          required
        >
          <option value="select">Select Event Category</option>
          <option value="tech">Tech</option>
          <option value="feature">Feature</option>
          <option value="activity">Activity</option>
        </select>
        <input
          onChange={(e) => setVotes(e.target.value)}
          required
          className="border border-black w-full p-4 outline-none rounded"
          type="number"
          min="0"
          placeholder="Votes"
        />
        <input
          onChange={(e) => setEventDate(e.target.value)}
          className="border border-black w-full p-2 outline-none rounded"
          type="date"
          placeholder="Event date "
          required
        />

        <textarea
          onChange={(e) => setDescription(e.target.value)}
          className="col-span-2 border border-black w-full p-2 outline-none rounded"
          cols="20"
          rows="5"
          required
          placeholder="Short description about the event"
        ></textarea>
        <button
          onClick={pushToFirebase}
          className="bg-green-500 col-auto w-48 h-12 text-white py-2 px-3 rounded"
        >
          Add New Event
        </button>
      </form>
    </div>
  )
}

export default EventListerForm
