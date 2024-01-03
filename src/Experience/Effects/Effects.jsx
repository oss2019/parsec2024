import React from "react"
import {
  EffectComposer,
  Bloom,
  Noise,
  Scanline,
} from "@react-three/postprocessing"
import { BlendFunction } from "postprocessing"
export const Effects = () => {
  return (
    <>
      <EffectComposer multisampling={0} disableNormalPass={true}>
        <Bloom
          intensity={1.5} // The bloom intensity.
          blurPass={undefined} // A blur pass.
          luminanceThreshold={0.5} // luminance threshold. Raise this value to mask out darker elements in the scene.
          luminanceSmoothing={0.5} // smoothness of the luminance threshold. Range is [0, 1]
          mipmapBlur={true} // Enables or disables mipmap blur.
          height={300}
        />
        <Scanline density={1.95} opacity={0.13} />
        <Noise premultiply blendFunction={BlendFunction.ADD} />
      </EffectComposer>
    </>
  )
}
