import { useThree } from "@react-three/fiber"
import { useEffect, useRef } from "react"
import { PerspectiveCamera } from "@react-three/drei"
function Camera() {
  const { size } = useThree()
  const cameraRef = useRef()
  useEffect(() => {
    const resizeCamera = () => {
      if (cameraRef.current) {
        if (size.width > 768) {
          cameraRef.current.zoom = 1
        } else if (size.width > 448) {
          cameraRef.current.zoom = 0.8
        } else {
          cameraRef.current.zoom = 0.6
        }
        cameraRef.current.aspect = size.width / size.height
      }
    }
    resizeCamera()
    window.addEventListener("resize", resizeCamera)

    return () => window.removeEventListener("resize", resizeCamera)
  }, [])
  return (
    <>
      <PerspectiveCamera position={[0, 0, 6]} ref={cameraRef} makeDefault />
    </>
  )
}

export default Camera
