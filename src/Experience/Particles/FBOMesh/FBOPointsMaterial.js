import { shaderMaterial } from "@react-three/drei"
import * as THREE from "three"
import fboPointsVertex from "../../Shaders/fboPointsVert.glsl"
import fboPointsFragment from "../../Shaders/fboPointsFrag.glsl"

const FBOPointsMaterial = shaderMaterial(
  {
    uPositions: null,
    uColor: new THREE.Color("#FC06FF"),
    uTime: 0.0,
    uTransitionProgress: 0.0,
    uModel1: 0,
    uModel2: 0,
    uColor1: new THREE.Color("#85E6C5"),
    uColor2: new THREE.Color("#A084E8"),
    uColor3: new THREE.Color("#279EFF"),
  },
  fboPointsVertex,
  fboPointsFragment
)

export { FBOPointsMaterial }
