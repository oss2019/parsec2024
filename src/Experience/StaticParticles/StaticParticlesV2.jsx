import * as THREE from "three"
import { useFrame, useThree } from "@react-three/fiber"
import { R3FPointsFX } from "r3f-points-fx"
import { useMemo, useRef, useEffect } from "react"
import GSAP from "gsap"
import vertFunctions from "./shaders/staticVertFunctions.glsl"
import fragFunctions from "./shaders/staticFragFunctions.glsl"

function StaticParticlesV2() {
  const sphere = new THREE.Mesh(
    new THREE.SphereGeometry(20, 16, 16),
    new THREE.MeshStandardMaterial()
  )
  const meshes = [sphere]
  const pointsCount = 15
  const pointsRef = useRef()
  const localRef = useRef()
  const globalRef = useRef()

  const lerp = {
    current: {
      x: 0,
      y: 0,
    },
    target: {
      x: 0,
      y: 0,
    },
    ease: 0.08,
  }
  const { size } = useThree()
  window.addEventListener("mousemove", (e) => {
    const factorX = -(e.clientX / size.width - 0.5) * 2
    const factorY = (e.clientY / size.height - 0.5) * 2
    lerp.target.x = factorX * 0.1
    lerp.target.y = factorY * 0.1
  })

  const generateRandom = (size) => {
    const length = size * size
    const data = new Float32Array(length)
    for (let i = 0; i < length; i++) {
      const range = 3 * Math.random()
      data[i] = range
    }
    return data
  }
  const randomArray = useMemo(() => {
    return generateRandom(pointsCount)
  }, [pointsCount])

  useFrame((state, delta) => {
    if (pointsRef.current) {
      pointsRef.current.updateTime(state.clock.elapsedTime)
    }
    if (globalRef.current && localRef.current) {
      localRef.current.rotation.y += delta * 0.06
      lerp.current.x = GSAP.utils.interpolate(
        lerp.current.x,
        lerp.target.x,
        lerp.ease
      )

      lerp.current.y = GSAP.utils.interpolate(
        lerp.current.y,
        lerp.target.y,
        lerp.ease
      )
      globalRef.current.rotation.x = lerp.current.y
      globalRef.current.rotation.y = lerp.current.x
    }
  })

  return (
    <>
      <group ref={globalRef} position={[0, 0, -21]}>
        <group ref={localRef}>
          <R3FPointsFX
            modelsArray={meshes}
            modelA={0}
            modelB={0}
            attributes={[
              {
                name: "aRandom",
                array: randomArray,
                itemSize: 1,
              },
            ]}
            uniforms={{
              uColor1: new THREE.Color("#F31559"),
              uColor2: new THREE.Color("#6528F7"),
              uColor3: new THREE.Color("#FFB000"),
            }}
            pointsVertFunctions={vertFunctions}
            pointsFragFunctions={fragFunctions}
            pointsCount={pointsCount}
            baseColor="#ff0000"
            pointSize={10}
            alpha={1.0}
            ref={pointsRef}
          />
        </group>
      </group>
    </>
  )
}

export default StaticParticlesV2
