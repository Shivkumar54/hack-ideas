import { createBrowserRouter } from "react-router-dom"
import Body from "../pages/Body"
import EventLister from "../pages/EventLister"
import Home from "../pages/Home"
import Login from "../pages/Login"

export const pageRoutes = createBrowserRouter([
  {
    element: <Body />,
    path: "/",
    children: [
      {
        element: <Home />,
        path: "/",
      },
      {
        element: <Login />,
        path: "/login",
      },
      {
        element: <EventLister />,
        path: "/event",
      },
    ],
  },
])
