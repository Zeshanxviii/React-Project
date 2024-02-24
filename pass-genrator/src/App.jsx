import { useState,useCallback,useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length,setlength]=useState(8)
  const [password, setpassword] = useState("")
  const [numberallowed, setnumallowed] = useState(false)
  const [specialCharallowed, setspeacialchar] = useState(false)
 
 const passwordgenrate=useCallback(
  ()=>{
      let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
      let pass=""
     
      if(numberallowed) str +="0123456789"
      if(specialCharallowed) str +="_-+=*/\|'][{}"
      
      for (let i = 1; i <=length; i++) {
        let char=Math.floor(Math.random() * str.length + 1)

        pass +=str.charAt(char);
        
      }
      setpassword(pass);
  
    },
  [numberallowed,length,specialCharallowed,setpassword]
 );

 const PasswordRef=useRef(null)

 const copyToClipBoard=useCallback(()=>{
  PasswordRef.current?.select()
  window.navigator.clipboard.writeText(password)
 },[password])

 useEffect(()=>{
    passwordgenrate()
 },
 [numberallowed,specialCharallowed,length,passwordgenrate])
 
 return (
   <>
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-white">

      <div className='lex shadow rounded-lg overflow-hidden mb-4'>
    
          <input type="text" value={password} placeholder='Password' ref={PasswordRef} readOnly className='w-full outline-none py-1 px-3 text-black' />
          <button className=' bg-blue-600 rounded-xl px-2 py-2 text-white shrink-0'  onClick={copyToClipBoard} >Copy</button>
     </div>                        
        
        <div className="flex text-sm gap-x-2">

          <div className="flex gap-x-1 items-center">

            <input type="range" min="6" max="30"   className='cursor-pointer' value={length} onChange={(e)=>{setlength(e.target.value)}} name="" id="" />
            <label >length :{length}</label>

          </div>

          <div className="flex gap-x-1 items-center">

            <input type="checkbox" onChange={()=>{setnumallowed((prev)=>!prev)}}/>
            <label className='' >Number</label>

          </div>
            
          <div className="flex gap-x-1 items-center">
            <input type="checkbox" onChange={()=>{setspeacialchar((prev)=>!prev)}}/>
            <label >Character</label>
          </div>
      </div>
    </div>
    </>
  )
}

export default App
