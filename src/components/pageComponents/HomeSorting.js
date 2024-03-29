import React from "react"

const HomeSorting = ({ handleClick, filterList, ltoH, htoL }) => {
  return (
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
          className="mb-5 bg-gray-200 mr-3 w-48 py-2 rounded-md"
        >
          Lowest Votes First
        </button>
        <button
          onClick={htoL}
          className="mb-5 bg-gray-200 mr-3 w-48 py-2 rounded-md"
        >
          Highest Votes First
        </button>
      </div>
    </div>
  )
}

export default HomeSorting
