import { OrbitControls } from "@react-three/drei"
import StaticParticles from "../Particles/StaticParticles/StaticParticles"
import FBOMesh from "../Particles/FBOMesh/FBOMesh.jsx"
import { Perf } from "r3f-perf"

export default function Scene() {
  return (
    <>
      <OrbitControls />
      <Perf />
      <StaticParticles />
      <FBOMesh currentModel={"earth"} />
    </>
  )
}
