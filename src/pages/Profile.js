import React from "react"
import { useEmpContext } from "../hooks/empContext"

const Profile = () => {
  const { empDetails } = useEmpContext()
  return (
    <div className="flex justify-center items-center flex-col h-[80vh]">
      <img
        src="https://img.freepik.com/premium-photo/minimalist-profile-illustration-with-vivid-comic-book-style_899449-102180.jpg"
        alt="Banner"
        className="w-72 h-72"
      />
      <h1 className="text-2xl">
        <span className="font-semibold ">Employer Name -</span>{" "}
        {empDetails?.empName}
      </h1>
      <h1 className="text-2xl">
        <span className="font-semibold">Employer ID - </span>
        {empDetails?.empNumber}
      </h1>
    </div>
  )
}

export default Profile
