import Experience from "../Experience/Experience"
import { useLocation } from "react-router-dom"
import { Outlet } from "react-router-dom"
import Appbar from "../Components/Appbar/Appbar"

function Layout() {
  const location = useLocation()

  // Get the name of the active route's component
  const getRouteName = () => {
    const pathname = location.pathname
    const segments = pathname.split("/")
    return segments[segments.length - 1]
  }

  return (
    <>
      <div className="experience">
        <Experience current={getRouteName()} />
      </div>
      <div className="page-wrapper">
        <Appbar current={getRouteName()} />
        <Outlet />
      </div>
    </>
  )
}

export default Layout
