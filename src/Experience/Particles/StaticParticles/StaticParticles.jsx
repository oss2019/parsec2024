import { useMemo, useRef } from "react"
import * as THREE from "three"
import { useFrame, useThree } from "@react-three/fiber"
import GSAP from "gsap"
import vertexShader from "../../Shaders/staticParticlesVert.glsl"
import fragmentShader from "../../Shaders/staticParticlesFrag.glsl"

function StaticParticles() {
  const count = 250
  const pointRef = useRef()
  const groupRef = useRef()

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

  const vertices = useMemo(() => {
    const position = new Float32Array(count * 3)

    for (let i = 0; i < count; ++i) {
      const randomAngle1 = Math.PI * (Math.random() - 0.5) * 2
      const radius = 25
      const randomAngle2 = Math.PI * (Math.random() - 0.5) * 2
      const x = radius * Math.cos(randomAngle1) * Math.sin(randomAngle2)
      const y = radius * Math.cos(randomAngle2)
      const z = radius * Math.sin(randomAngle1) * Math.sin(randomAngle2)
      const l = i * 3
      position[l] = x
      position[l + 1] = y
      position[l + 2] = z
    }
    return position
  }, [count])

  const randomColor = useMemo(() => {
    const color = new Float32Array(count)
    for (let i = 0; i < count; ++i) {
      const range = 3 * Math.random()
      color[i] = range
    }
    return color
  }, [count])

  useFrame((state, delta) => {
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
    pointRef.current.material.uniforms.uTime.value = state.clock.elapsedTime

    pointRef.current.rotation.y += delta * 0.015
    groupRef.current.rotation.x = lerp.current.y
    groupRef.current.rotation.y = lerp.current.x
  })

  return (
    <>
      <group ref={groupRef}>
        <points ref={pointRef} position={[0, 0, -25]}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={count}
              array={vertices}
              itemSize={3}
            />
            <bufferAttribute
              attach="attributes-pointColor"
              count={count}
              array={randomColor}
              itemSize={1}
            />
          </bufferGeometry>
          <shaderMaterial
            vertexShader={vertexShader}
            fragmentShader={fragmentShader}
            transparent={true}
            blending={THREE.AdditiveBlending}
            uniforms={{
              maxPointSize: { value: 1.5 },
              uTime: { value: 0 },
              uColor1: {
                value: new THREE.Vector3(0.988 * 1.5, 0.055 * 1.5, 0.204 * 1.5),
              },
              uColor2: {
                value: new THREE.Vector3(1 * 1.5, 0.039 * 1.5, 0.937 * 1.5),
              },
              uColor3: {
                value: new THREE.Vector3(1 * 1.5, 0.753 * 1.5, 0 * 1.5),
              },
            }}
            depthWrite={false}
            alphaTest={0.5}
            toneMapped={false}
          />
        </points>
      </group>
    </>
  )
}

export default StaticParticles
