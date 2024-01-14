import React, { useEffect } from "react"
import Header from "../components/mainComponents/Header"
import Footer from "../components/mainComponents/Footer"
import { Outlet, useNavigate } from "react-router-dom"
import { useEmpContext } from "../hooks/empContext"

const Body = () => {
  const navigate = useNavigate()
  const { empDetails } = useEmpContext()
  console.log(empDetails.empName)

  useEffect(() => {
    empDetails.empName ? navigate("/") : navigate("/login")
  }, [])
  return (
    <div className="container mx-auto">
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Body
