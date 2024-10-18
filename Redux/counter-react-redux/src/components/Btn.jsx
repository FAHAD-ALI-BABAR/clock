import React from 'react'
import { useDispatch } from 'react-redux'

const Btn = () => {
    const dispatch=useDispatch();
    const handleincrement=()=>{
        dispatch({type:"Increment"});
    }
    const handledecrement=()=>{
        dispatch({type:"Decrement"});
    }
  return (
    <>
   <button type="button" className="btn btn-primary" onClick={handleincrement}>Increment</button>
<button type="button" className="btn btn-secondary" onClick={handledecrement}>Decrement</button>
{/* <button type="button" className="btn btn-success">Success</button>
<button type="button" className="btn btn-danger">Danger</button>
<button type="button" className="btn btn-warning">Warning</button>
<button type="button" className="btn btn-info">Info</button>
<button type="button" className="btn btn-light">Light</button>
<button type="button" className="btn btn-dark">Dark</button>

<button type="button" className="btn btn-link">Link</button> */}
        </>
  )
}

export default Btn