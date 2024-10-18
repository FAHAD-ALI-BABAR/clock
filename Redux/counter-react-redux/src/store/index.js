import {createStore} from "redux"

const initial_counter_value={
    counter:0
}
const storereducer=(store=initial_counter_value,action)=>{
    let value=store;
    if(action.type==="Increment"){
        console.log("increment");
        
        value={counter: store.counter+1}
    } else if(action.type==="Decrement"){
        console.log("Decrement");
        
        value={counter: store.counter-1}
    }else if(action.type==="Reset"){
        console.log("reset");
        value={counter: store.counter=0}
        
    }
    return value;
}
const counterstore=createStore(storereducer)

export default counterstore