import { useFrame, createPortal, extend } from "@react-three/fiber"
import { useMemo, useState, useEffect, useRef } from "react"
import { useGLTF, useFBO } from "@react-three/drei"
import * as THREE from "three"
import { surfaceSampler } from "./surfaceSampler"
import { generateRandomnArray } from "./generateRandomArray"
import { useControls, Leva } from "leva"
import { bezier } from "@leva-ui/plugin-bezier"
import { FBOPointsMaterial } from "./FBOPointsMaterial"
import { FBOMeshMaterial } from "./FBOMeshMaterial"

extend({ FBOMeshMaterial })
extend({ FBOPointsMaterial })

function FBOMesh({ currentModel }) {
  const rocketMesh = useGLTF("/Models/rocket-v2.glb").nodes.RING
  const earthMesh =
    useGLTF("/Models/earth.glb").nodes
      .uploads_files_220341_Earth_Longi_Alti002_1

  const fboMeshShaderRef = useRef()
  const points = useRef()
  const startTimeRef = useRef(0)
  const size = 128
  const modelTextures = {
    rocket: useMemo(() => surfaceSampler(size, rocketMesh), [size]),
    earth: useMemo(() => surfaceSampler(size, earthMesh), [size]),
  }

  const modelIndex = {
    rocket: 0,
    earth: 1,
  }

  //controls
  const { duration, curve } = useControls({
    duration: {
      value: 1.3,
      min: 0,
      max: 5,
      step: 0.1,
    },
    curve: bezier([0.16, 1, 0.3, 1]),
  })

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

  function changingModels() {
    startTimeRef.current = 0
    changeModel2State(currentModel)
  }

  useEffect(() => {
    changingModels()
    points.current.material.transparent = true
    points.current.material.blending = THREE.AdditiveBlending
  }, [currentModel])

  useFrame((state, delta) => {
    const { gl, clock } = state
    gl.setRenderTarget(renderTarget)
    gl.clear()
    gl.render(scene, camera)
    gl.setRenderTarget(null)

    if (startTimeRef.current === 0) {
      startTimeRef.current = state.clock.elapsedTime
    }

    const elapsed = state.clock.elapsedTime - startTimeRef.current
    const progress = curve.evaluate(Math.min(elapsed / duration, 1))

    if (progress >= 1) {
      changeModel1State(model2State)
    }

    points.current.material.uniforms.uPositions.value = renderTarget.texture
    points.current.material.uniforms.uTime.value = state.clock.elapsedTime
    fboMeshShaderRef.current.uniforms.uTransitionProgress.value = progress
    points.current.material.uniforms.uTransitionProgress.value = progress
  })

  return (
    <>
      <Leva hidden={true} />
      {createPortal(
        <mesh>
          <fBOMeshMaterial
            ref={fboMeshShaderRef}
            key={FBOMeshMaterial.key}
            positionsA={modelTextures[model1State]}
            positionsB={modelTextures[model2State]}
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
    </>
  )
}

export default FBOMesh
