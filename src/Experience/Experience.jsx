import { Canvas } from "@react-three/fiber"
import Scene from "./Scene/Scene"
import { Effects } from "./Effects/Effects"
import * as THREE from "three"

export default function Experience({ current }) {
  return (
    <>
      <Canvas
        className="canvas"
        camera={{ position: [0, 0, 5] }}
        gl={{
          powerPreference: "high-performance",
          toneMapping: THREE.NoToneMapping,
        }}
        dpr={[1, 2]}
      >
        <Effects />
        <Scene currentMesh={current} />
      </Canvas>
    </>
  )
}
