import { useGLTF } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useRef } from "react"
import HolographicMaterial from "./HolograpgicMaterial"
import GSAP from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import { useEffect } from "react"

GSAP.registerPlugin(ScrollTrigger)
const Bot = () => {
  const { nodes } = useGLTF("/Models/ButterBot.glb")
  const localRef = useRef()
  const globalRef = useRef()

  const section4 = document.getElementById("animate-4")
  const section5 = document.getElementById("animate-5")

  useEffect(() => {
    if (!section4 || !section5 || !globalRef.current) return
    const ctx = GSAP.context(() => {
      const timeline4 = GSAP.timeline({
        scrollTrigger: {
          trigger: section4,
          scroller: "#main",
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
        },
      })

      const timeline5 = GSAP.timeline({
        scrollTrigger: {
          trigger: section5,
          scroller: "#main",
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
        },
      })

      timeline4.to(globalRef.current.position, {
        x: 0,
      })

      timeline5.to(globalRef.current.position, {
        z: 3,
        y: -10,
      })
    })
    return () => ctx.revert()
  }, [])

  useFrame((state) => {
    if (localRef.current) {
      const t = state.clock.getElapsedTime()
      localRef.current.rotation.set(
        Math.cos(t / 4) / 8,
        Math.sin(t / 4) / 8,
        -0.2 - (1 + Math.sin(t / 1.5)) / 20
      )
      localRef.current.position.y = (1 + Math.sin(t / 1.5)) / 10
    }
  })

  return (
    <group ref={globalRef} position={[15, 0, 0]}>
      <group ref={localRef}>
        <mesh geometry={nodes.Bot.geometry} rotation={[0.3, -0.5, 0]}>
          <HolographicMaterial
            signalSpeed={0}
            enableAdditive={false}
            hologramBrightness={1.2}
            hologramColor={"#6366f1"}
            scalineSize={4}
          />
        </mesh>
      </group>
    </group>
  )
}
useGLTF.preload("/Models/ButterBot.glb")
export default Bot
