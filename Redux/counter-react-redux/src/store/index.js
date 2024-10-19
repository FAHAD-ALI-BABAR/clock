import {createStore} from "redux"

const initial_counter_value={
    counter:0,
    privacy:false
}
const storereducer=(store=initial_counter_value,action)=>{
    let value=store;
    if(action.type==="Increment"){
        console.log("increment");
        
        value={counter: store.counter+1,privacy: store.privacy}
    } else if(action.type==="Decrement"){
        console.log("Decrement");
        
        value={counter: store.counter-1,privacy: store.privacy}
    }else if(action.type==="Reset"){
        console.log("reset");
        value={counter: store.counter=0,privacy: store.privacy}
        
    }
    else if(action.type==="Addition"){
        console.log("it has reacjjhed index js file");
        const realvalue= parseInt(action.payload.number)//here we are converting our string value to actual number so that it can be added in couter value
        value={counter: store.counter+ realvalue,privacy: store.privacy}
    }
    else if(action.type==="Subtraction"){
        console.log("it has reached for subtraction index js file");
        const realvalue= parseInt(action.payload.number)//here we are converting our string value to actual number so that it can be added in couter value
        value={counter: store.counter- realvalue,privacy: store.privacy}
    }
    else if(action.type==="Privacy_toggle"){
        value={privacy: !store.privacy,counter:store.counter}
        
    }
   
    return value;
}
const counterstore=createStore(storereducer)

export default counterstore