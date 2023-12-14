import Lenis from "@studio-freight/lenis"
import { useLayoutEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"

const useLenis = (route) => {
  gsap.registerPlugin(ScrollTrigger)
  useLayoutEffect(() => {
    const scrollEl = document.querySelector("#main")
    if (!scrollEl || !route) return
    const behavior = route === "home" ? "auto" : "smooth"
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: behavior,
    })

    const lenis = new Lenis({
      wrapper: scrollEl,
      wheelMultiplier: 0.5,
      touchMultiplier: 1,
    })

    lenis.on("scroll", ScrollTrigger.update)

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })

    gsap.ticker.lagSmoothing(0)

    return () => {
      lenis.destroy()
    }
  }, [route])
}

export default useLenis
