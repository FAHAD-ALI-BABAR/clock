import React from 'react'
import { useSelector } from 'react-redux'

const Displaycounter = () => {
   const counter= useSelector(store=>store.counter)
   const counterval=counter.counterVal
  return (
    <p className="lead mb-4">The value of counter is :{counterval}</p>
  )
}

export default Displaycounter