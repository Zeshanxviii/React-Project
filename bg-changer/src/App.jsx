import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState('black')

  return (
    <>
    <div className=" w-full h-screen flex justify-center space-x-4" style={{backgroundColor:count}}>
     <div className="absolute bg-white px-5 py-5 inset bottom-[48px] rounded-xl space-x-4">
      <button onClick={()=>{setCount("red")}} className="bg-red-700 outline-none font-bold rounded-full py-2 px-3 text-white">Red</button>
      <button onClick={()=>{setCount("blue")}} className="bg-blue-700 font-bold rounded-full py-2 px-3 text-white">blue</button>
      <button onClick={()=>{setCount("skyblue")}} className="bg-sky-700 font-bold rounded-full py-2 px-3 text-white">Sky-blue</button>
      <button onClick={()=>{setCount("yellow")}} className="bg-yellow-300 font-bold rounded-full text-red-600 py-2 px-3">Yellow</button>
      <button onClick={()=>{setCount("darkviolet")}} className="bg-violet-700 font-bold rounded-full py-2 px-3 text-white">Violet</button>
      <button onClick={()=>{setCount("orange")}} className="bg-orange-700 font-bold rounded-full py-2 px-3 text-white">orange</button>
    </div>
     </div>
    </>
  )
}

export default App
