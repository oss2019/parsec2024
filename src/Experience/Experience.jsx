import { Canvas } from "@react-three/fiber"
import Scene from "./Scene/Scene"
import { Effects } from "./Effects/Effects"

export default function Experience() {
  return (
    <>
      <Canvas
        className="canvas"
        camera={{ position: [0, 0, 5] }}
        gl={{
          powerPreference: "high-performance",
        }}
        dpr={[1, 2]}
      >
        <Effects />
        <Scene />
      </Canvas>
    </>
  )
}
