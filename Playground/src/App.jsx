import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Meme_page from './Components/meme_page'
import Popup from './Components/popup'
import Hexplore from './Components/hexplore'
import Create from './Components/create'
import Profile from './Components/profile'
import Login from './Components/login'
import Navbar from './Components/navbar'
import Error from './Components/error'

function App() {
 

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Meme_page/>}/>
        <Route path='/popup' element={<Popup/>}/>
        <Route path='/hexplore' element={<Hexplore/>}/>
        <Route path='/create' element={<Create/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
    </>
  )
}

export default App
