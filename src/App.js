import "./App.css"
import { RouterProvider } from "react-router-dom"
import { pageRoutes } from "./constants/pageroutes"

function App() {
  const routes = pageRoutes
  return (
    <div className="App">
      <RouterProvider router={routes} />
    </div>
  )
}

export default App
