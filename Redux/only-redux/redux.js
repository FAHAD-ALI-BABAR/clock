const redux=require("redux");
const initailavalue={
    counter:0
}
const reducer=(store=initailavalue,action)=>{
    let newvalue=store;
    if(action.type==="Increment"){
        newvalue={store: store.counter+1}
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
