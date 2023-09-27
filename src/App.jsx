import Views from "./Views"
import { useEffect } from "react"

function App() {
  useEffect(() => {
    document.title = "Parsec 2024"
 }, []);
  return (
    <>
      <Views />
    </>
  )
}

export default App
