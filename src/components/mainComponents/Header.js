import React from "react"
import { Link, useNavigate } from "react-router-dom"
import { navList } from "../../constants/navList"
import { useEmpContext } from "../../hooks/empContext"

const Header = () => {
  const { empDetails } = useEmpContext()
  const navigate = useNavigate()

  const getNavItemTitle = (item) => {
    if (empDetails && empDetails.empName && item.title === "Login") {
      return `Hello, ${empDetails.empName}`
    }
    return item.title
  }

  const handleNameClick = () => {
    if (empDetails && empDetails.empName) {
      navigate("/profile")
    } else {
      navigate("/login")
    }
  }

  return (
    <div className="h-14 mx-auto flex justify-between items-center">
      <div className="logo">
        <h6 className="tracking-widest uppercase text-green-600 font-bold">
          <Link to="/">Hacker-ideas</Link>
        </h6>
      </div>
      <div className="lists">
        <ul className="flex gap-10">
          {navList.map((item) => (
            <li key={item.id}>
              {item.title === "Login" ? (
                <span onClick={handleNameClick} style={{ cursor: "pointer" }}>
                  {getNavItemTitle(item)}
                </span>
              ) : (
                <Link to={item.path}>{getNavItemTitle(item)}</Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Header
