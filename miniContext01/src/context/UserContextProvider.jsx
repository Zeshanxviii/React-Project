import React, { useState } from 'react'
import { userContext } from './UserContext'

function UserContextProvider(props) {
    const [user , setuser] = useState( )
  return (
    <>
    <userContext.Provider value={{user,setuser}}>
        {props.children}
    </userContext.Provider>
    </>
  )
}

export default UserContextProvider