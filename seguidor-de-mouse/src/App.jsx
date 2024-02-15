import { useEffect, useState } from "react"

function App() {
  const [enabled, setEnabled] = useState(false)

  useEffect( () => {
    console.log('efecto')
  } )

  return (
    <h3>proyecto 3</h3>
  )
}

export default App
