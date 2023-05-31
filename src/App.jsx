import React from 'react'
import './App.css'
import {HomePage, Login, SignUp, Settings} from './pages'
import { Route, Routes } from 'react-router-dom'
import {ProtectedRoute} from "./custom"

function App() {
  
  return (
      <div>
        <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/signup' element={<SignUp />}/>
        </Routes>
      </div>
  )
}

export default App
