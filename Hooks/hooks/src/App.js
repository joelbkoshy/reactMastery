import './App.css';
import { useReducer, useEffect, useState, useRef } from 'react'

const App = () => {
  const [checked, setChecked] = useReducer(checked => !checked, false)
  const [stateChange, setStateChange] = useState(1);
  const title = useRef();
  const color = useRef();
  const [useTitle,setUseTitle] = useState("")
  const [useColor,setUseColor] = useState("#0000")

  const [reducerCounter, setReducerCounter] = useReducer((state, e) => {
    let count = 0
    e.target.value === "+" ? count = state + 1 : count = state - 1
    return count
  }, 1)

  const reducer = (state, action) => {
    if (action === "+") {
      return state + 1
    }
    else if (action === "-") {
      return state - 1
    }
  }
  const [simpleReducer, dispatchReducer] = useReducer(reducer, 1)

  const handleUseSubmit = ()=>{
    console.log(useTitle,useColor)
    alert("The useState : title : "+ useTitle+" and color : "+useColor)
    setUseTitle("")
    setUseColor("#0000")
  }

  useEffect(() => {
    console.log("This is for the first render")
  }, [])

  useEffect(() => {
    console.log("This is for checkbox")
  }, [checked])

  useEffect(() => {
    console.log("This is for counter")
  }, [stateChange])

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
              <button onClick={() => setStateChange(stateChange + 1)}>+</button>
              <button onClick={() => setStateChange(stateChange - 1)}>-</button>
            </div>
          </div>
        </div>
        <div className="counter">
          <div className="counter_first">
            <h2>Reducer Count is {reducerCounter}</h2>
            <div className="buttons">
              <button onClick={(e) => setReducerCounter(e)} value={"+"}> +</button>
              <button onClick={(e) => setReducerCounter(e)} value={"-"}>-</button>
            </div>
          </div>
        </div>
        <div className="counter">
          <div className="counter_first">
            <h2>Simple Reducer Count is {simpleReducer}</h2>
            <div className="buttons">
              <button onClick={() => dispatchReducer("+")} value={"+"}>+</button>
              <button onClick={() => dispatchReducer("-")} value={"-"}>-</button>
            </div>
          </div>
        </div>
        <div>
          <div className="input">
            <input type="text" ref={title} />
            <input type="color" ref={color} />
            <button onClick={() => {
              alert(`${title.current.value},${color.current.value}`)
              title.current.value=""
              color.current.value=""
            }}
            >Check color name and id</button>
          </div>
        </div>
        <div>
          <div className="input">
            <input type="text"  value={useTitle} onChange={(e)=>setUseTitle(e.target.value)}/>
            <input type="color" value={useColor} onChange={(e)=>setUseColor(e.target.value)}/>
            <button onClick={() => handleUseSubmit()}
            >Check color name and id</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
