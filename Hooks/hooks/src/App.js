import './App.css';
import { useReducer, useEffect, useState } from 'react'

const App = () => {
  const [checked, setChecked] = useReducer(checked => !checked, false)
  const [stateChange, setStateChange] = useState(1);
  const [reducerCounter,setReducerCounter] = useReducer((state,e)=>{
    let count = 0
    e.target.value === "+" ? count=state+1 :count=state-1
    return count
  },1)


  const reducer = (state,action)=>{
    if(action==="+"){
      return state+1
    }
    else if(action==="-"){
      return state-1
    }
  }
  const [simpleReducer,dispatchReducer] = useReducer(reducer,1)
  
  useEffect(()=>{
     console.log("This is for the first render")
  },[])

  useEffect(()=>{
    console.log("This is for checkbox")
  },[checked])

  useEffect(()=>{
    console.log("This is for counter")
  },[stateChange])
  return (
    <div className="App">
      <div className='main'>
        <div className="input">
          <input type="checkbox" value={checked} onChange={setChecked} />
          <h2>{checked ? "checked" : "not checked"}</h2>
        </div>
        <div className="counter">
          <div className="counter_first">
            <h2>Count is {stateChange}</h2>
            <div className="buttons">
              <button onClick={()=>setStateChange(stateChange+1)}>+</button>
              <button onClick={()=>setStateChange(stateChange-1)}>-</button>
            </div>
          </div>
        </div>
        <div className="counter">
          <div className="counter_first">
            <h2>Reducer Count is {reducerCounter}</h2>
            <div className="buttons">
              <button onClick={(e)=>setReducerCounter(e)} value={"+"}> +</button>
              <button onClick={(e)=>setReducerCounter(e)} value={"-"}>-</button>
            </div>
          </div>
        </div>
        <div className="counter">
          <div className="counter_first">
            <h2>Simple Reducer Count is {simpleReducer}</h2>
            <div className="buttons">
              <button onClick={()=>dispatchReducer("+")} value={"+"}>+</button>
              <button onClick={()=>dispatchReducer("-")} value={"-"}>-</button>
            </div>
          </div>
        </div>
        <div>

        </div>
      </div>
    </div>
  );
}

export default App;
