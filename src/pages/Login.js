import React, { useEffect, useRef, useState } from "react"
import { useEmpContext } from "../hooks/empContext"
import { useNavigate } from "react-router-dom"

const Login = () => {
  const empName = useRef()
  const empId = useRef()
  const [details, setDetails] = useState({})
  const { updatedEmpDetails } = useEmpContext()
  const navigate = useNavigate()

  const handleForm = (e) => {
    e.preventDefault()
    const empNameValue = empName.current.value.trim()
    const empIdValue = empId.current.value.trim()

    if (empNameValue && empIdValue) {
      const key = `EMP_${empIdValue}`
      localStorage.setItem(
        key,
        JSON.stringify({
          empName: empNameValue,
          empNumber: empIdValue,
        })
      )

      const getEMPDetails = localStorage.getItem(key)
      const getEMP = JSON.parse(getEMPDetails)
      setDetails(getEMP)
      updatedEmpDetails(getEMP)
      navigate("/")
    } else {
      alert("Looks like some data is missing, Please fill to continue")
    }
  }

  useEffect(() => {
    if (details.empName && details.empNumber) {
      navigate("/")
    }
  }, [details, navigate])

  return (
    <div className="flex h-[80vh] gap-10 items-center justify-center overflow-hidden">
      <div className="loginImage w-[60%]">
        <img
          src="https://img.freepik.com/free-vector/hand-drawn-doodle-icons-set_1308-90706.jpg?w=740&t=st=1705156798~exp=1705157398~hmac=482ac989ac6c1d2442044393f275edec947fee5f4b927e59309d31f81920d2d8"
          alt="banner"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="loginForm w-[40%] ">
        <h6 className="tracking-widest uppercase text-green-600 font-bold">
          Hacker-ideas
        </h6>
        <h1 className="text-4xl mt-5 mb-3 font-base font-bold">Access Point</h1>
        <p className="">Only scriptBox associates can access this site</p>
        <form className="w-full mt-7">
          <label className="tracking-wide capitalize text-base font-medium">
            Employee Name
          </label>
          <input
            ref={empName}
            type="text"
            className="p-3 outline-none border border-black w-full mt-2 mb-5 rounded-lg"
            placeholder="Ex- john"
          />
          <label className="tracking-wide capitalize text-base font-medium">
            Employee ID
          </label>
          <input
            ref={empId}
            type="number"
            className="p-3 outline-none border border-black w-full mt-2 mb-3 rounded-lg"
            placeholder="Ex- 2215478"
          />
          <button
            onClick={handleForm}
            className="bg-purple-500 col-auto w-48 h-12 mt-3 text-white py-2 px-3 rounded-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
