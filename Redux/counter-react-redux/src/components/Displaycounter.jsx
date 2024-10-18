import React from 'react'
import { useSelector } from 'react-redux'

const Displaycounter = () => {
   const counter= useSelector(store=>store.counter)
  return (
    <p className="lead mb-4">The value of counter is :{counter}</p>
  )
}

export default Displaycounter