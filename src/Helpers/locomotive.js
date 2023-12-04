import { useLayoutEffect } from "react"
import LocomotiveScroll from "locomotive-scroll"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"

const useLocoScroll = (start) => {
  gsap.registerPlugin(ScrollTrigger)

  useLayoutEffect(() => {
    if (!start) return

    const scrollEl = document.querySelector("#main")
    let locoScroll = new LocomotiveScroll({
      el: scrollEl,
      smooth: true,
      multiplier: 1,
      lerp: 0.1,
    })

    locoScroll.on("scroll", ScrollTrigger.update)

    ScrollTrigger.scrollerProxy(scrollEl, {
      scrollTop(value) {
        if (locoScroll) {
          return arguments.length
            ? locoScroll.scrollTo(value, 0, 0)
            : locoScroll.scroll.instance.scroll.y
        }
        return null
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        }
      },
      pinType: document.querySelector("#main").style.transform
        ? "transform"
        : "fixed",
    })

    const lsUpdate = () => {
      if (locoScroll) {
        locoScroll.update()
      }
    }

    ScrollTrigger.addEventListener("refresh", lsUpdate)
    ScrollTrigger.refresh()

    return () => {
      if (locoScroll) {
        ScrollTrigger.removeEventListener("refresh", lsUpdate)
        locoScroll.destroy()
        locoScroll = null
      }
    }
  }, [start])
}

export default useLocoScroll
