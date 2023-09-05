import { useState, useEffect } from "react"
import "./Appbar.css"
import { Link } from "react-router-dom"
function Appbar({ current }) {
  const [active, setActive] = useState(false)
  const handleClick = () => setActive(!active)

  const handleScroll = () => {
    const parentElement = document.querySelector(".page-wrapper")
    if (!parentElement) return

    const scrollTop = parentElement.scrollTop
    const scrollHeight = parentElement.scrollHeight
    const clientHeight = parentElement.clientHeight

    // Calculate the scroll progress as a percentage.
    const scrollProgress = (scrollTop / (scrollHeight - clientHeight)) * 100

    const progressBar = document.querySelector(".scroll-progress")
    if (progressBar) {
      progressBar.style.width = `${scrollProgress}%`
    }
  }

  useEffect(() => {
    const parentElement = document.querySelector(".page-wrapper")
    if (!parentElement) return

    parentElement.addEventListener("scroll", handleScroll)

    return () => {
      parentElement.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <>
      <header className="header-wrapper">
        <div className="header-main">
          <div className="header-logo">
            <img src="/Images/parsec-logo.png" />
          </div>
          <div className="header-nav-menu">
            <div className="header-nav-options">
              <div
                className={`nav-item ${
                  current === "home" && "nav-item-active"
                }`}
              >
                <Link to="/home">Home</Link>
              </div>
              <div
                className={`nav-item ${
                  current === "events" && "nav-item-active"
                }`}
              >
                <Link to="/">Events</Link>
              </div>
              <div
                className={`nav-item ${
                  current === "team" && "nav-item-active"
                }`}
              >
                <Link to="/">Team</Link>
              </div>
            </div>
            <div className="header-mobile-nav">
              <button
                className={`nav-current ${active && "nav-current-active"}`}
                onClick={handleClick}
              >
                <div>{current}</div>
                <svg
                  fill="#fff"
                  height="12px"
                  width="12px"
                  version="1.1"
                  id="Layer_1"
                  viewBox="0 0 330 330"
                >
                  <path
                    id="XMLID_225_"
                    d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393  c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393  s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"
                  />
                </svg>
              </button>
              <div className={`nav-list ${active && "nav-list-active"}`}>
                <ul>
                  <li>
                    <Link to="/home">Home</Link>
                  </li>
                  <li>
                    <Link to="/">Events</Link>
                  </li>
                  <li>
                    <Link to="/">Team</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="progress-indicator-wrapper">
        <div className="scroll-progress"></div>
      </div>
    </>
  )
}

export default Appbar
