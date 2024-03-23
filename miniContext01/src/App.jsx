import { useState,useContext } from 'react'
import UserContextProvider from './context/UserContextProvider'
import Profile from './components/profile'
import Login from './components/login'


function App() {
  

  return (
    <>
    <UserContextProvider>
      <Profile/>
      <Login />
    </UserContextProvider>
    </>
  )
}

export default App
