import {createStore} from "redux"

const initial_counter_value={
    counter:0
}
const storereducer=(store=initial_counter_value,action)=>{
    let value=store;
    if(action.type==="Increment"){
        value={counter: store.counter+1}
    } else if(action.type==="Decrement"){
        value={counter: store.counter-1}
    }
    return value;
}
const counterstore=createStore(storereducer)

export default counterstore