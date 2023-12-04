import { useEffect, useRef, useMemo } from "react"
import * as THREE from "three"
import { useGLTF } from "@react-three/drei"
import { R3FPointsFX } from "r3f-points-fx"
import { useFrame } from "@react-three/fiber"
import GSAP from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import vertFunctions from "./shaders/morphVertFunctions.glsl"
import fragFunctions from "./shaders/morphFragFunctions.glsl"

GSAP.registerPlugin(ScrollTrigger)
function Morph() {
  const rocketMesh = useGLTF("/Models/rocket.glb").nodes["Rocket"]
  const earthMesh = useGLTF("/Models/earth.glb").nodes["earth"]
  const cryoMesh = useGLTF("Models/cryo.glb").nodes["Cryo"]

  const meshes = [earthMesh, rocketMesh, cryoMesh]
  const section1 = document.getElementById("hero-section-1")
  const section2 = document.getElementById("hero-section-2")

  const morphRef = useRef()
  const localRef = useRef()
  const globalRef = useRef()
  const rotateMesh = useRef(true)

  //Set Custom Attributes
  const generateRandomnArray = (size) => {
    const length = size * size * 3
    const data = new Float32Array(length)

    for (let i = 0; i < length; i++) {
      const stride = i * 3

      data[stride] = Math.random() * 3 - 1
      data[stride + 1] = Math.random() * 3 - 1
      data[stride + 2] = Math.random() * 3 - 1
    }
    return data
  }

  const randomArray = useMemo(() => {
    return generateRandomnArray(128)
  }, [])

  useEffect(() => {
    if (morphRef.current) {
      const ctx = GSAP.context(() => {
        const timeline1 = GSAP.timeline({
          scrollTrigger: {
            trigger: section1,
            scroller: ".page-wrapper",
            start: "bottom bottom-=100px",
            end: "bottom top+=100px",
            scrub: 1,
            onUpdate: (self) => {
              morphRef.current.updateProgress(self.progress)
            },
            onEnter: () => {
              morphRef.current.setModelB(1)
            },
            onLeave: () => {
              morphRef.current.setModelA(1)
              rotateMesh.current = false
            },
            onEnterBack: () => {
              morphRef.current.setModelA(0)
              rotateMesh.current = true
            },
            onLeaveBack: () => {
              morphRef.current.setModelB(0)
            },
          },
        })
      })
      return () => ctx.revert()
    }
  }, [])

  useEffect(() => {
    if (morphRef.current) {
      const ctx = GSAP.context(() => {
        const timeline1 = GSAP.timeline({
          scrollTrigger: {
            trigger: section2,
            scroller: ".page-wrapper",
            start: "bottom bottom-=100px",
            end: "bottom top+=100px",
            scrub: 1,
            onUpdate: (self) => {
              morphRef.current.updateProgress(self.progress)
            },
            onEnter: () => {
              morphRef.current.setModelB(2)
            },
            onLeave: () => {
              morphRef.current.setModelA(2)
            },
            onEnterBack: () => {
              morphRef.current.setModelA(1)
            },
            onLeaveBack: () => {
              morphRef.current.setModelB(1)
            },
          },
        })
      })
      return () => ctx.revert()
    }
  }, [])

  //mesh movement tweens
  useEffect(() => {
    if (!globalRef.current || !localRef.current || !section1) return
    const ctx = GSAP.context(() => {
      let mm = GSAP.matchMedia()
      const timeline1 = GSAP.timeline({
        scrollTrigger: {
          trigger: section1,
          scroller: "#main",
          start: "bottom bottom-=100px",
          end: "bottom top+=100px",
          scrub: 1,
        },
      })

      timeline1
        .to(
          localRef.current.rotation,
          {
            y: 0.5 * Math.PI,
          },
          0
        )
        .to(
          globalRef.current.rotation,
          {
            x: 0.5,
            z: 0.5,
          },
          0
        )

      mm.add(
        "(min-width:768px)",
        () => {
          timeline1.to(globalRef.current.position, {
            x: 2.5,
          })
        },
        0
      )
    })
    return () => ctx.revert()
  }, [])

  useFrame((state, delta) => {
    if (morphRef.current && rotateMesh.current === true) {
      morphRef.current.updateTime(state.clock.elapsedTime)
      const mesh = morphRef.current.getPointsMesh()
      mesh.rotation.y = state.clock.elapsedTime * 0.1
    }
  })

  return (
    <>
      <group ref={globalRef}>
        <group ref={localRef}>
          <R3FPointsFX
            modelsArray={meshes}
            baseColor="#ff0000"
            modelA={0}
            modelB={0}
            ref={morphRef}
            uniforms={{
              uColor1: new THREE.Color("#F31559"),
              uColor2: new THREE.Color("#6528F7"),
              uColor3: new THREE.Color("#FFB000"),
            }}
            attributes={[
              {
                name: "aRandom",
                array: randomArray,
                itemSize: 3,
              },
            ]}
            pointsFragFunctions={fragFunctions}
            pointsVertFunctions={vertFunctions}
            scale={[1.7, 1.7, 1.7]}
            pointSize={10}
            pointsCount={100}
            alpha={1.0}
          />
        </group>
      </group>
    </>
  )
}
useGLTF.preload("/Models/rocket.glb")
useGLTF.preload("/Models/earth.glb")
useGLTF.preload("Models/cryo.glb")

export default Morph
