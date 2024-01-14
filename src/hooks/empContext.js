import React, { createContext, useContext, useState } from "react"

const EmpContext = createContext()

export const EmpProvider = ({ children }) => {
  const [empDetails, setEmpDetails] = useState({})
  
    const updatedEmpDetails = (newDetails) => {
    setEmpDetails(newDetails)
    }
  return (
    <EmpContext.Provider value={{ empDetails, updatedEmpDetails }}>
      {children}
    </EmpContext.Provider>
  )
}
export const useEmpContext = () => {
  return useContext(EmpContext)
}
