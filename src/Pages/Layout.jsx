import Experience from "../Experience/Experience"
import { useLocation } from "react-router-dom"
import { Outlet } from "react-router-dom"
import Appbar from "../Components/Appbar/Appbar"
import useLocoScroll from "../Helpers/locomotive"

function Layout() {
  const location = useLocation()

  // Get the name of the active route's component
  const getRouteName = () => {
    const pathname = location.pathname
    const segments = pathname.split("/")
    return segments[segments.length - 1]
  }
  useLocoScroll(true, getRouteName())
  return (
    <>
      <div className="experience">
        <Experience current={getRouteName()} />
      </div>
      <div>
        <Appbar current={getRouteName()} />
        <div id="main" className="page-wrapper">
          <div id="main-content">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  )
}

export default Layout
