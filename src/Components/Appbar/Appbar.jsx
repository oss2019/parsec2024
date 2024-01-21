import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"
import NavButton from "../NavButton/NavButton"
import NavTile from "../NavTile/NavTile"
import GSAP from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import { HiOutlineChevronDown } from "react-icons/hi"

GSAP.registerPlugin(ScrollTrigger)
function Appbar({ current }) {
  const [mobileNavActive, setMobileNavActive] = useState(false)
  const scrollContainer = document.getElementById("main-content")
  const scrollProgress = useRef()

  useEffect(() => {
    if (!scrollContainer && !scrollProgress.current) return
    const ctx = GSAP.context(() => {
      const progressTimeLine = GSAP.timeline({
        scrollTrigger: {
          trigger: scrollContainer,
          scroller: "#main",
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
        },
      })

      progressTimeLine.from(scrollProgress.current, {
        scaleX: 0,
      })
    })

    return () => ctx.revert()
  }, [current])

  return (
    <>
      <div
        className="container fixed top-0 left-0 max-w-full backdrop-blur-sm bg-black bg-opacity-10"
        style={{ zIndex: 100 }}
      >
        <div className="mx-auto max-w-page_lg flex items-center justify-between px-4 h-20">
          <div className="md:w-1/4">
            <img
              src="/Images/parsec-logo.png"
              alt="parsec logo"
              className="sm:w-[200px] sm:h-[36px] w-[150px] h-[27px]"
            />
          </div>
          <div className="nav-options-desktop flex items-center justify-end md:w-3/4 max-[768px]:hidden">
            <div className="ml-4">
              <Link to="/home">
                <NavButton content="Home" isActive={current === "home"} />
              </Link>
            </div>
            <div className="ml-4">
              <Link to="/events">
                <NavButton content="Events" isActive={current === "events"} />
              </Link>
            </div>
            <div className="ml-4">
              <Link to="/team">
                <NavButton content="Team" isActive={current === "team"} />
              </Link>
            </div>
            <div className="ml-4">
              <Link to="/cultural">
                <NavButton
                  content="Cultural"
                  isActive={current === "cultural"}
                />
              </Link>
            </div>
          </div>
          <div className="nav-mobile md:hidden">
            <button
              onClick={() => setMobileNavActive(!mobileNavActive)}
              className={`rounded-full mr-4 text-4xl ${
                mobileNavActive && "rotate-180"
              } ease-in-out duration-300`}
            >
              <HiOutlineChevronDown />
            </button>
          </div>
        </div>
        <div
          className={`nav-mobile-options h-0 overflow-hidden md:hidden ${
            mobileNavActive && "h-60"
          } ease-in-out duration-300`}
          style={{ transformOrigin: "left top" }}
        >
          <div>
            <Link to="/home">
              <NavTile
                onClick={() => setMobileNavActive(false)}
                content="Home"
                isActive={current === "home"}
              />
            </Link>
          </div>
          <div>
            <Link to="/events">
              <NavTile
                onClick={() => setMobileNavActive(false)}
                content="Events"
                isActive={current === "events"}
              />
            </Link>
          </div>
          <div>
            <Link to="/team">
              <NavTile
                onClick={() => setMobileNavActive(false)}
                content="Team"
                isActive={current === "team"}
              />
            </Link>
          </div>
          <div>
            <Link to="/cultural">
              <NavTile
                onClick={() => setMobileNavActive(false)}
                content="Cultural Events"
                isActive={current === "cultural"}
              />
            </Link>
          </div>
        </div>
        <div className="w-full" style={{ height: "2px" }}>
          <div
            className="h-full w-full bg-rose-500"
            style={{ transformOrigin: "left top" }}
            ref={scrollProgress}
          ></div>
        </div>
      </div>
    </>
  )
}

export default Appbar
