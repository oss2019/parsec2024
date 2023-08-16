import { shaderMaterial } from "@react-three/drei"
import fboMeshVertex from "../../Shaders/fboMeshVert.glsl"
import fboMeshFragment from "../../Shaders/fboMeshFrag.glsl"

export const FBOMeshMaterial = shaderMaterial(
  {
    uTransitionProgress: 0.0,
    positionsA: null,
    positionsB: null,
  },
  fboMeshVertex,
  fboMeshFragment
)
