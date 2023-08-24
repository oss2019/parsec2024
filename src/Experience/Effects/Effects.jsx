import React from "react"
import { EffectComposer, Bloom, Scanline } from "@react-three/postprocessing"
export const Effects = () => {
  return (
    <EffectComposer multisampling={1} disableNormalPass={true}>
      <Bloom mipmapBlur luminanceThreshold={0.5} />
      <Scanline density={2} opacity={0.2} />
    </EffectComposer>
  )
}

// import * as THREE from "three"
// import React, { useMemo } from "react"
// import { Effects as EffectsComposer } from "@react-three/drei"
// import { extend, useThree } from "@react-three/fiber"
// import { UnrealBloomPass, FilmPass } from "three-stdlib"

// extend({ UnrealBloomPass })
// extend({ FilmPass })

// export const Effects = () => {
//   const { size, scene, camera } = useThree()
//   const aspect = useMemo(
//     () => new THREE.Vector2(size.width, size.height),
//     [size]
//   )

//   return (
//     <EffectsComposer
//       multisamping={1}
//       renderIndex={1}
//       disableGamma
//       disableRenderPass
//     >
//       <renderPass attachArray="passes" scene={scene} camera={camera} />
//       <filmPass attachArray="passes" args={[0.35, 0.6, 2048, false]} />
//       <unrealBloomPass attachArray="passes" args={[aspect, 0.4, 1, 0]} />
//     </EffectsComposer>
//   )
// }
