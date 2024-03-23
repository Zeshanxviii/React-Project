import React,{useContext,useState} from 'react'
import { userContext } from '../context/UserContext'

function Profile() {

    const [User, setUser] = useState(" ")
    const [Password, setPasseord] = useState(" ")

    const {setuser} = useContext(userContext)

    const handle = (e) => {
        e.preventDefault()
        
    // event.preventDefault();
        setuser({User})
    }

  return (
    <div>
        <h1>My Page</h1>
        <input type="text" value={User} placeholder='Enter user name' onChange={(e)=>setUser(e.target.value)} />
        <input type="text" value={Password} placeholder='Enter user Password' onChange={(e)=>setPasseord(e.target.value)}   />
        <button onClick={handle}>Summit</button>
    </div>
  )
}

export default Profile