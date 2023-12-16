import StaticParticlesV2 from "../StaticParticles/StaticParticlesV2.jsx"
import HomePageScene from "./HomePageScene.jsx"

export default function Scene({ currentMesh }) {
  let componentToRender
  switch (currentMesh) {
    case "home":
      componentToRender = <HomePageScene />
      break
    default:
      componentToRender = <group />
      break
  }
  return (
    <>
      {/* <Perf position="bottom-left" /> */}
      {/* <StaticParticles /> */}
      <StaticParticlesV2 />
      {componentToRender}
    </>
  )
}
