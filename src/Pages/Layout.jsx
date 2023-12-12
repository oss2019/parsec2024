import Experience from "../Experience/Experience"
import { useLocation } from "react-router-dom"
import { Outlet } from "react-router-dom"
import Appbar from "../Components/Appbar/Appbar"
import useLocoScroll from "../Helpers/locomotive"
import useLenis from "../Helpers/lenis"

function Layout() {
  const location = useLocation()

  // Get the name of the active route's component
  const getRouteName = () => {
    const pathname = location.pathname
    const segments = pathname.split("/")
    return segments[segments.length - 1]
  }
  const route = getRouteName()
  useLenis(route)
  return (
    <>
      <div className="experience">
        <Experience current={getRouteName()} />
      </div>
      <div id="main-content">
        <Appbar current={getRouteName()} />
        <div>
          <div>
            <Outlet />
          </div>
        </div>
      </div>
    </>
  )
}

export default Layout
