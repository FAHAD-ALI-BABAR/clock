import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import {privacyaction, sliceaction} from "../store"
const Btn = () => {
    const inputelement=useRef();
   
    const dispatch=useDispatch();
    const handleincrement=()=>{
      dispatch( sliceaction.Increment());
      console.log("add");
      
        
    }
    const handledecrement=()=>{
    dispatch( sliceaction.Decrement())
    }
    const handlereset=()=>{
       dispatch(sliceaction.Reset());
    }
    const handleaddition=()=>{
      dispatch(sliceaction.Addition({
        
          addnum:inputelement.current.value,
        
      }));
        // let inputelementvalue=inputelement.current.value;
        // console.log("value is:",inputelementvalue);
        
        // dispatch({
        //     type:"Addition",
        //     payload:{
        //     number:inputelementvalue
        // }})
        
        // dispatch({
        //     type:"Addition",
        //     payload:{
        //     number:inputelementvalue
        // }})
        inputelement.current.value="";
    }
    const handlesubtraction=()=>{
      dispatch(sliceaction.Subtraction({
        
        subnum:inputelement.current.value,
      
    }));
        // console.log("subtarction");
        
        // let inputelementvalue=inputelement.current.value;
        // dispatch({type:"Subtraction",payload:{
        //     number:inputelementvalue
        // }})
        // inputelement.current.value="";

    }
    const handleprivacy=()=>{
        console.log("privacy");
        
        dispatch(privacyaction.toggle());
    }
  return (
    <>
   
   <div className="container">
  <div className="row mb-3">
    <div className="col ">
      <button type="button" className="btn btn-primary btnnn " onClick={handleincrement}>Increment</button>
      <button type="button" className="btn btn-success  btnnn" onClick={handledecrement}>Decrement</button>
      <button type="button" className="btn btn-light" onClick={handlereset}>Reset</button>
      <button type="button" className="btn btn-warning  btnnn" onClick={handleprivacy}>Privacy Toggle</button>
    </div>
  </div>

  <div className="row">
    <div className="col mb-3">
      <input ref={inputelement} type="text" className="input-btn "/>
      <button  type="button" className="btn btn-info btnnn" onClick={handleaddition}>Addition</button>
      <button type="button" className="btn btn-danger" onClick={handlesubtraction}>Subtraction</button>
    </div>
  </div>
</div>


        </>
  )
}

export default Btn