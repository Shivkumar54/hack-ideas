import React from "react"
import Header from "../components/mainComponents/Header"
import Footer from "../components/mainComponents/Footer"
import { Outlet } from "react-router-dom"

const Body = () => {
  return (
    <div className="container mx-auto">
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Body
