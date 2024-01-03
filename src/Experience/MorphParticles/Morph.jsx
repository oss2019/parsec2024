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
  const logoMesh = useGLTF("/Models/iitdhLogo.glb").nodes["path12"]

  const meshes = [earthMesh, rocketMesh, logoMesh]
  const section1 = document.getElementById("animate-1")
  const section2 = document.getElementById("animate-2")
  const section3 = document.getElementById("animate-3")
  const section5 = document.getElementById("animate-5")
  const section6 = document.getElementById("animate-6")

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

  //movement curve for rocket
  const curve = useMemo(() => {
    return new THREE.CatmullRomCurve3([
      new THREE.Vector3(
        -10 * Math.cos(0.5) * Math.sin(0.5),
        10 * Math.cos(0.5) * Math.cos(0.5),
        10 * Math.sin(0.5)
      ),
      new THREE.Vector3(-2, 3.5, -4),
      new THREE.Vector3(0, -3, -3),
      new THREE.Vector3(0, -1, 0),
      new THREE.Vector3(0, 0, 0),
    ])
  }, [])

  //particles transition timelines
  //first
  useEffect(() => {
    if (morphRef.current) {
      const ctx = GSAP.context(() => {
        const timeline1 = GSAP.timeline({
          scrollTrigger: {
            trigger: section1,
            scroller: "#main",
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

  //second
  useEffect(() => {
    if (morphRef.current) {
      const ctx = GSAP.context(() => {
        const timeline6 = GSAP.timeline({
          scrollTrigger: {
            trigger: section6,
            scroller: "#main",
            start: "top bottom-=100px",
            end: "bottom bottom",
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
    if (
      !globalRef.current ||
      !localRef.current ||
      !morphRef.current ||
      !section1 ||
      !section2 ||
      !section3 ||
      !section5 ||
      !section6
    )
      return
    let mm = GSAP.matchMedia()
    const ctx = GSAP.context(() => {
      const timeline1 = GSAP.timeline({
        scrollTrigger: {
          trigger: section1,
          scroller: "#main",
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
        },
      })

      const timeline2 = GSAP.timeline({
        scrollTrigger: {
          trigger: section2,
          scroller: "#main",
          start: "top bottom",
          end: "bottom bottom",
          scrub: 1,
        },
      })

      const timeline3 = GSAP.timeline({
        scrollTrigger: {
          trigger: section3,
          scroller: "#main",
          start: "bottom bottom",
          end: "bottom top",
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
          globalRef.current.position,
          {
            z: 5,
          },
          0
        )

      timeline2
        .to(
          globalRef.current.position,
          {
            z: 0,
          },
          1
        )
        .to(
          globalRef.current.rotation,
          {
            x: 0.5,
            z: 0.5,
          },
          1
        )
      mm.add("(min-width:768px)", () => {
        timeline2.to(
          globalRef.current.position,
          {
            x: 2.5,
          },
          1
        )
      })

      timeline3
        .to(localRef.current.rotation, {
          y: 4 * Math.PI,
        })
        .to(globalRef.current.position, {
          x: -10 * Math.cos(0.5) * Math.sin(0.5),
          y: 10 * Math.cos(0.5) * Math.cos(0.5),
          z: 10 * Math.sin(0.5),
        })

      const timeline5 = GSAP.timeline({
        scrollTrigger: {
          trigger: section5,
          scroller: "#main",
          start: "top bottom",
          end: "top top",
          scrub: 1,
          onEnter: () => {
            localRef.current.rotation.y = 0
            localRef.current.rotation.x = Math.PI / 2
            const mesh = morphRef.current.getPointsMesh()
            mesh.rotation.y = 0
          },
          onLeaveBack: () => {
            localRef.current.rotation.y = 4 * Math.PI
            localRef.current.rotation.x = 0
            globalRef.current.rotation.set(0.5, 0, 0.5)
            globalRef.current.position.set(
              -10 * Math.cos(0.5) * Math.sin(0.5),
              10 * Math.cos(0.5) * Math.cos(0.5),
              10 * Math.sin(0.5)
            )
          },
          onUpdate: ({ progress }) => {
            const position = curve.getPointAt(progress)
            const tanget = curve.getTangentAt(progress).normalize()

            globalRef.current.position.copy(position)
            globalRef.current.lookAt(position.clone().add(tanget))
          },
        },
      })

      const timeline6 = GSAP.timeline({
        scrollTrigger: {
          trigger: section6,
          scroller: "#main",
          start: "top bottom-=100px",
          end: "bottom bottom",
          scrub: 1,
        },
      })

      timeline6.to(localRef.current.rotation, {
        y: Math.PI / 2,
      })
    })
    return () => {
      ctx.revert()
      mm.revert()
    }
  }, [])

  useFrame((state, delta) => {
    if (morphRef.current && rotateMesh.current === true) {
      morphRef.current.updateTime(state.clock.elapsedTime)
      const mesh = morphRef.current.getPointsMesh()
      mesh.rotation.y = state.clock.elapsedTime * 0.1
    }
    if (morphRef.current) {
      morphRef.current.updateTime(state.clock.elapsedTime)
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
              uColor4: new THREE.Color("#9333ea"),
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
            alpha={1.2}
          />
        </group>
      </group>
    </>
  )
}
useGLTF.preload("/Models/rocket.glb")
useGLTF.preload("/Models/earth.glb")
useGLTF.preload("Models/iitdhLogo.glb")

export default Morph
