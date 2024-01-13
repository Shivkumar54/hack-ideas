import React from "react"
import { Link } from "react-router-dom"
import { navList } from "../../constants/navList"
const Header = () => {
  const list = navList
  return (
    <div className=" h-14 mx-auto flex justify-between items-center">
      <div className="logo">
        <h4 className="text-lg">Hack ideas</h4>
      </div>
      <div className="lists">
        <ul className="flex gap-10">
          {list.map((i) => {
            return (
              <li key={i.id}>
                <Link to={i.path}>{i.title}</Link>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default Header
