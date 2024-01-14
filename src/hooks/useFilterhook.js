import { useState } from "react"

const useFilterhook = (data) => {
  const [filterData, setFilterData] = useState(data || null)
  const handleClick = (name) => {
    if (!data) return
    if (name === "reset") {
      setFilterData(data)
    } else {
      const filtered = data.filter(
        (item) => item.category.toLowerCase() === name.toLowerCase()
      )
      setFilterData(filtered)
    }
  }
  const ltoH = () => {
    const newSort = [...filterData].sort((a, b) => a.votes - b.votes)
    setFilterData(newSort)
  }
  const htoL = () => {
    const newSort = [...filterData].sort((a, b) => b.votes - a.votes)
    setFilterData(newSort)
  }

  return { filterData, htoL, ltoH, handleClick }
}

export default useFilterhook
