import { useState } from 'react'
import './App.css'
import Clockheader from './Component/Clockheader'
import Clockbanner from './Component/Clockbanner'
import Time from './Component/Time'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Clockheader>

      </Clockheader>
      <Clockbanner></Clockbanner>
      <Time></Time>
    </>
  )
}

export default App
