import React from "react";
// import { useState } from "react";
import {useSelector, useDispatch} from 'react-redux';
import {actions} from '../src/store/index';
function App() {
  const counter=useSelector((state)=>state.counter);
  const dispatch=useDispatch();
  const increment=()=>{
    dispatch(actions.increment());
    // dispatch({type:"INC"});

  }
  const decrement=()=>{
    dispatch(actions.decrement());
    // dispatch({type:"DEC"});
  };

  const addby=()=>{
    dispatch(actions.addby(12));
    // dispatch({type:'ADDBY',payload:48});
  }
//   const [count, setCount]=useState(0);
//  function Count_More(){
  /* {count % 2 ==0 ? <h1 style={{color:"blue"}}>{count}</h1> :<h5 style={{color:"red"}}>{count}</h5>}
  
  <button onClick={Count_More}>Count Plus</button>
  <img src="https://practicaltyping.com/wp-content/uploads/2019/02/okabe.jpg" style={{width:480-count*4,height:480-count*4}}></img> */
//    setCount(count+1);
 
  return (
    <div>
   <div class="container sm mt-8 ml-8 grid justify-center">
     <h1 class="font from-slate-700 font-serif">Counter App</h1>
     <h2 class="flex justify-center">{counter}</h2>
     <hr/>
     <button onClick={increment} class="bg-blue-600 rounded p-2 shadow-xl ">Increment</button>&nbsp;
     <button onClick={decrement} class="bg-red-700 rounded p-2 shadow-xl ">Decrement</button>&nbsp;
     <button onClick={addby} class="bg-green-600 rounded p-2 shadow-xl ">Add by 10</button>
   </div>
    </div>
  );
}

export default App;
