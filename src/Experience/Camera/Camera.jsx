import { useEffect, useRef } from "react"
import { PerspectiveCamera } from "@react-three/drei"
function Camera() {
  const cameraRef = useRef()
  useEffect(() => {
    const resizeCamera = () => {
      if (cameraRef.current) {
        if (window.innerWidth > 768) {
          cameraRef.current.zoom = 1
        } else if (window.innerWidth > 448) {
          cameraRef.current.zoom = 0.8
        } else {
          cameraRef.current.zoom = 0.6
        }
        cameraRef.current.aspect = window.innerWidth / window.innerHeight
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
