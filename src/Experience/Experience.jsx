import { Canvas } from "@react-three/fiber"
import Scene from "./Scene/Scene"
import Camera from "./Camera/Camera"
import { Effects } from "./Effects/Effects"
import * as THREE from "three"
import { OrbitControls } from "@react-three/drei"
export default function Experience({ current }) {
  return (
    <>
      <Canvas
        className="canvas"
        gl={{
          alpha: true,
          powerPreference: "default",
          toneMapping: THREE.ACESFilmicToneMapping,
          outputColorSpace: THREE.SRGBColorSpace,
        }}
        dpr={[1, 2]}
      >
        <Camera />
        <Scene currentMesh={current} />
        <color args={["#000000"]} attach="background" />
        <Effects />
        {/* <OrbitControls /> */}
      </Canvas>
    </>
  )
}
