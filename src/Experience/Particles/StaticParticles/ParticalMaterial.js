import { shaderMaterial } from "@react-three/drei"
import vertexShader from "../Shaders/staticParticlesVert.glsl"
import fragmentShader from "../Shaders/staticParticlesFrag.glsl"
import * as THREE from "three"
const vert = vertexShader
const frag = fragmentShader
const StaticParticalMaterial = shaderMaterial(
  {
    maxPointSize: 20.0,
  },
  vert,
  frag
)

export { StaticParticalMaterial }
