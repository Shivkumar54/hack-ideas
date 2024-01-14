import React from "react"

const EventShimmer = () => {
  return (
    <div className="grid grid-cols-4 gap-5">
      {[...Array(8)].map((_, index) => {
        return (
          <div
            className="bg-gray-200 animate-pulse rounded-lg w-full h-[40vh]"
            key={index + 1}
          ></div>
        )
      })}
    </div>
  )
}

export default EventShimmer
