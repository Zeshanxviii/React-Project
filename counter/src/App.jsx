import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const increament = () => {
    if(count<20){
      setCount(count+1)
    }
    console.log("Error coz Count is greater then 20");
  }
  const decreament = () => {
    if(count>0){
      setCount(count-1)
    }
    console.log("Error coz Count is Lesser then 1");
  }

  return(
    <>
    <h1>Count : {count}</h1>
    <button onClick={increament}>Increament{count}</button>
    <button onClick={decreament}>Decreament{count}</button>
    </>
  )
}

export default App
