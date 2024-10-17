import React, { useEffect, useState } from 'react'

const Time = () => {
    const[currenttime,setcurrenttime]=useState("");
    const time=()=>{
        const date=new Date();
        const currentDateTime = date.toLocaleString();
         setcurrenttime(currentDateTime)
    }
    useEffect(()=>{
        time();
        const interval=setInterval(time,1000);
        return ()=>{
            clearInterval(interval)
        }
        
    },[])
    // useEffect(() => {
    //     time(); // Initial call to set time immediately
    //     const intervalId = setInterval(time, 1000); // Update every second
    
    //     // Cleanup interval on component unmount
    //     return () => clearInterval(intervalId);
    //   }, []);
  return (
    <div>Time is: {currenttime}</div>
  )
}

export default Time