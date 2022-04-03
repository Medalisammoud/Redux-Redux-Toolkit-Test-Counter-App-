// import { createStore } from "redux";

// const reducerFn=(state={counter:24},action)=>{

//     // if(action.type === "INC"){
//     //     return {counter:state.counter+1};
//     // }

//     // if(action.type === "DEC"){
//     //     return {counter:state.counter-1}
//     // }

//     // if(action.type === "ADDBY"){
//     //     return {counter:state.counter + action.payload};
//     // }

//     switch (action.type) {
//         case "INC":
//             return {counter:state.counter+1};
//         case "DEC":
//             return {counter:state.counter-1};
//         case "ADDBY":
//             return {counter:state.counter+action.payload};
//         default:
//             return state;
//     }
// //   return state;

// };

// const store=createStore(reducerFn);

// export default store;

import { configureStore, createSlice } from "@reduxjs/toolkit";

const counterSlice=createSlice({
    name:"counter",
    initialState:{counter:0},
    reducers:{
        increment(state,action){
          state.counter++;
        },
        decrement(state,action){
          state.counter--;
        },
        addby(state,action){
          state.counter+=action.payload;
        },
    }
});

export const actions=counterSlice.actions;

const store=configureStore({
    reducer:counterSlice.reducer
});

export default store;