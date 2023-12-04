import StaticParticles from "../StaticParticles/StaticParticles.jsx"
import StaticParticlesV2 from "../StaticParticles/StaticParticlesV2.jsx"
import Morph from "../MorphParticles/Morph.jsx"
import { Perf } from "r3f-perf"

export default function Scene({ currentMesh }) {
  let componentToRender
  switch (currentMesh) {
    case "home":
      componentToRender = <Morph />
      break
    default:
      componentToRender = <group />
      break
  }
  return (
    <>
      <Perf position="bottom-left" />
      {/* <StaticParticles /> */}
      <StaticParticlesV2 />
      {componentToRender}
    </>
  )
}
