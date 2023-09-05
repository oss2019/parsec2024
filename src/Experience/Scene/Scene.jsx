import StaticParticles from "../Particles/StaticParticles/StaticParticles"
import FBOMesh from "../Particles/FBOMesh/FBOMesh.jsx"
import { Perf } from "r3f-perf"

export default function Scene({ currentMesh }) {
  let componentToRender
  switch (currentMesh) {
    case "home":
      componentToRender = <FBOMesh />
      break
    default:
      componentToRender = <group />
      break
  }
  return (
    <>
      {/* <Perf /> */}
      <StaticParticles />
      {componentToRender}
    </>
  )
}
