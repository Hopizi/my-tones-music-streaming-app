import React from 'react'
import './App.css'
import {HomePage, Login, SignUp, Settings, Explore, MyMusic, Albums, Artists, Favourites, Download, Shared} from './pages'
import { Route, Routes } from 'react-router-dom'
import {ProtectedRoute} from "./custom"

function App() {
  
  return (
      <div>
        <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/signup' element={<SignUp />}/>
          <Route path='/settings' element={<Settings />}/>
          <Route path='/explore' element={<Explore />}/>
          <Route path='/mymusic' element={<MyMusic />}/>
          <Route path='/albums' element={<Albums />}/>
          <Route path='/artists' element={<Artists />}/>
          <Route path='/favourites' element={<Favourites />}/>
          <Route path='/downloads' element={<Download />}/>
          <Route path='/shared' element={<Shared />}/>
        </Routes>
      </div>
  )
}

export default App
