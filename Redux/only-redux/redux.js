const redux=require("redux");
const initailavalue={
    counter:1
}
const reducer=(store=initailavalue,action)=>{
    let newvalue=store;
    if(action.type==="Increment"){
        newvalue={counter:store.counter+1};
    }else if(action.type==="Decrement"){
        // console.log("decrement:",store);
        
        newvalue={counter:store.counter-1};
    }else if(action.type==="Addition"){
        newvalue={counter: store.counter+ action.payload.userid}
    }
    return newvalue
//     console.log("reducer called",action);
    
//    return {counter: store.counter+1};
}
const store=redux.createStore(reducer);

const subscriber=()=>{
    const state=store.getState();
    console.log(state); 
}
store.subscribe(subscriber);
store.dispatch({type:"Increment"})
store.dispatch({type:"Decrement"})
store.dispatch({type:"Increment"})
store.dispatch({type:"Decrement"})
store.dispatch({type:"Addition",payload:{userid:7}})

