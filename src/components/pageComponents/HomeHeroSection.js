import React from "react"

const HomeHeroSection = () => {
  return (
    <div className="flex gap-10 justify-center items-center h-[80vh] mb-10">
      <div className="w-[70%]">
        <h1 className="text-6xl font-bold">
          Welcome to <span className="text-green-500">Hack ideas</span>
        </h1>
        <p className="mt-4 pr-[5rem]">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat,
          assumenda magni! Doloremque rerum quisquam non architecto esse vero
          similique hic, perferendis quia sunt tenetur incidunt atque. Debitis
          illum possimus nisi?
        </p>
      </div>
      <div className="w-[30%] h-full">
        <img
          src="https://i.pinimg.com/1200x/30/96/99/309699e991ebe75b1004e23c50c297c1.jpg"
          alt="Home banner"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  )
}

export default HomeHeroSection
