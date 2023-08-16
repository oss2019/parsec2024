import { Canvas } from "@react-three/fiber"
import Scene from "./Scene/Scene"
import { Bloom, EffectComposer, Scanline } from "@react-three/postprocessing"

export default function Experience() {
  return (
    <>
      <Canvas
        className="canvas"
        camera={{ position: [0, 0, 5] }}
        gl={{
          powerPreference: "high-performance",
          alpha: false,
          antialias: false,
          stencil: false,
          depth: false,
        }}
      >
        <EffectComposer>
          <Scanline opacity={0.3} density={2} />
          <Bloom
            luminanceThreshold={0}
            opacity={0.5}
            radius={0.3}
            luminanceSmoothing={0}
            intensity={1.1}
          />
        </EffectComposer>
        <Scene />
      </Canvas>
    </>
  )
}
