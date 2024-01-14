import "./App.css"
import { RouterProvider } from "react-router-dom"
import { pageRoutes } from "./constants/pageroutes"
import { EmpProvider } from "./hooks/empContext"
function App() {
  const routes = pageRoutes

  return (
    <EmpProvider>
      <div className="App">
        <RouterProvider router={routes} />
      </div>
    </EmpProvider>
  )
}

export default App
