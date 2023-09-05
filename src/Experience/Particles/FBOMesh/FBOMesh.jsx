import { useFrame, createPortal, extend } from "@react-three/fiber"
import { useMemo, useState, useEffect, useRef } from "react"
import { useGLTF, useFBO } from "@react-three/drei"
import * as THREE from "three"
import { surfaceSampler } from "./surfaceSampler"
import { generateRandomnArray } from "./generateRandomArray"
import { FBOPointsMaterial } from "./FBOPointsMaterial"
import { FBOMeshMaterial } from "./FBOMeshMaterial"
import GSAP from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"

extend({ FBOMeshMaterial })
extend({ FBOPointsMaterial })
GSAP.registerPlugin(ScrollTrigger)

function FBOMesh() {
  const rocketMesh = useGLTF("/Models/rocket-v2.glb").nodes.RING
  const earthMesh =
    useGLTF("/Models/earth.glb").nodes
      .uploads_files_220341_Earth_Longi_Alti002_1
  const landMesh = useGLTF("/Models/land.glb").nodes["Island2-House"]

  const fboMeshShaderRef = useRef()
  const points = useRef()
  const group = useRef()
  const size = 128

  const modelTextures = {
    rocket: useMemo(() => surfaceSampler(size, rocketMesh), [size]),
    earth: useMemo(() => surfaceSampler(size, earthMesh), [size]),
    land: useMemo(() => surfaceSampler(size, landMesh), [size]),
  }

  const modelIndex = {
    rocket: 0,
    earth: 1,
    land: 2,
  }

  const section1 = document.getElementById("hero-section-1")
  const section2 = document.getElementById("hero-section-2")
  const section3 = document.getElementById("sect-3")
  const animate2 = document.getElementById("home-animate-2")

  //Sub Render
  const scene = new THREE.Scene()
  const camera = new THREE.OrthographicCamera(
    -1,
    1,
    1,
    -1,
    1 / Math.pow(2, 53),
    1
  )
  const positions = new Float32Array([
    -1, -1, 0, 1, -1, 0, 1, 1, 0, -1, -1, 0, 1, 1, 0, -1, 1, 0,
  ])
  const uvs = new Float32Array([0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0])

  const renderTarget = useFBO({
    minFilter: THREE.NearestFilter,
    magFilter: THREE.NearestFilter,
    type: THREE.FloatType,
  })

  const particlesPosition = useMemo(() => {
    const length = size * size
    const particles = new Float32Array(length * 3)
    for (let i = 0; i < length; i++) {
      let i3 = i * 3
      particles[i3 + 0] = (i % size) / size
      particles[i3 + 1] = i / size / size
    }

    return particles
  }, [size])

  const randomnessArray = useMemo(() => generateRandomnArray(size), [size])

  const [model1State, changeModel1State] = useState(null)
  const [model2State, changeModel2State] = useState(null)

  useEffect(() => {
    points.current.material.transparent = true
    changeModel1State("earth")
  }, [])

  useFrame((state, delta) => {
    const { gl, clock } = state
    gl.setRenderTarget(renderTarget)
    gl.clear()
    gl.render(scene, camera)
    gl.setRenderTarget(null)

    points.current.material.uniforms.uPositions.value = renderTarget.texture
    points.current.material.uniforms.uTime.value = state.clock.elapsedTime
  })

  //Morph particles on scroll 😍
  useEffect(() => {
    const ctx = GSAP.context(() => {
      const timeline1 = GSAP.timeline({
        scrollTrigger: {
          trigger: section1,
          scroller: ".page-wrapper",
          start: "bottom bottom-=100px",
          end: "bottom top+=100px",
          scrub: 1,
          onUpdate: (self) => {
            fboMeshShaderRef.current.uniforms.uTransitionProgress.value =
              self.progress
            points.current.material.uniforms.uTransitionProgress.value =
              self.progress
          },
          onEnter: () => {
            changeModel2State("rocket")
          },
          onLeave: () => {
            changeModel1State("rocket")
          },
          onEnterBack: () => {
            changeModel1State("earth")
          },
          onLeaveBack: () => {
            changeModel2State("earth")
          },
        },
      })
    })
    return () => ctx.revert()
  }, [])

  useEffect(() => {
    const ctx = GSAP.context(() => {
      const timeline2 = GSAP.timeline({
        scrollTrigger: {
          trigger: section2,
          scroller: ".page-wrapper",
          start: "bottom bottom-=200px",
          end: "bottom top+=200px",
          scrub: 1,
          onUpdate: (self) => {
            fboMeshShaderRef.current.uniforms.uTransitionProgress.value =
              self.progress
            points.current.material.uniforms.uTransitionProgress.value =
              self.progress
          },
          onEnter: () => {
            changeModel2State("land")
          },
          onLeave: () => {
            changeModel1State("land")
          },
          onEnterBack: () => {
            changeModel1State("rocket")
          },
          onLeaveBack: () => {
            changeModel2State("rocket")
          },
        },
      })
    })
    return () => ctx.revert()
  }, [])

  //particles mesh movement 😍💕
  useEffect(() => {
    const ctx = GSAP.context(() => {
      let mm = GSAP.matchMedia()
      const timeline1 = GSAP.timeline({
        scrollTrigger: {
          trigger: section1,
          scroller: ".page-wrapper",
          start: "bottom bottom-=100px",
          end: "bottom top+=100px",
          scrub: 1,
        },
      })
      timeline1
        .to(points.current.rotation, {
          y: 0.5 * Math.PI,
        })
        .to(group.current.rotation, {
          x: 0.5,
          z: 0.5,
        })
      mm.add("(min-width:900px)", () => {
        timeline1.to(group.current.position, {
          x: 3,
        })
      })

      const timeline2 = GSAP.timeline({
        scrollTrigger: {
          trigger: animate2,
          scroller: ".page-wrapper",
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      })
      timeline2
        .to(points.current.rotation, {
          y: 4 * Math.PI,
        })
        .to(group.current.position, {
          x: -10 * Math.cos(0.5) * Math.sin(0.5),
          y: 10 * Math.cos(0.5) * Math.cos(0.5),
          z: 10 * Math.sin(0.5),
        })
    })
    return () => ctx.revert()
  }, [])

  return (
    <>
      {createPortal(
        <mesh>
          <fBOMeshMaterial
            ref={fboMeshShaderRef}
            key={FBOMeshMaterial.key}
            positionsA={modelTextures[model1State]}
            positionsB={modelTextures[model2State]}
            toneMapped={false}
          />
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={positions.length / 3}
              array={positions}
              itemSize={3}
            />
            <bufferAttribute
              attach="attributes-uv"
              count={uvs.length / 2}
              array={uvs}
              itemSize={2}
            />
          </bufferGeometry>
        </mesh>,
        scene
      )}
      <group ref={group}>
        <points ref={points} position={[0, 0, 0]} scale={[1.7, 1.7, 1.7]}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={particlesPosition.length / 3}
              array={particlesPosition}
              itemSize={3}
            />
            <bufferAttribute
              attach="attributes-aRandom"
              count={randomnessArray.length / 3}
              array={randomnessArray}
              itemSize={3}
            />
          </bufferGeometry>
          <fBOPointsMaterial
            key={FBOPointsMaterial.key}
            depthWrite={false}
            uModel1={modelIndex[model1State]}
            uModel2={modelIndex[model2State]}
            toneMapped={false}
          />
        </points>
      </group>
    </>
  )
}

export default FBOMesh
