import React,{useContext} from 'react'
import { userContext } from '../context/UserContext'



function Login() {

    const {user} = useContext(userContext)

    if(!user){
        return <h1>Please Login</h1>
    }
    else{
        return <h1>welcome {user.User}</h1>
    }
  
}

export default Login