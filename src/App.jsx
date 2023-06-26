import React from 'react'
import './App.css'
import {HomePage, Login, SignUp, Settings, Explore, MyMusic, Albums, Artists, Favourites, Download, Shared} from './pages'
import { Route, Routes } from 'react-router-dom'
import {ProtectedRoute} from "./custom"
import { ThemeContext } from './context/DarkMode'
import { useContext } from 'react'
import { FavouriteSongsContextProvider } from './context/FavouriteSongs'

function App() {
  
  const {theme} = useContext(ThemeContext)

  return (
    <FavouriteSongsContextProvider>
      <div id={theme}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/mymusic" element={<MyMusic />} />
          <Route path="/albums" element={<Albums />} />
          <Route path="/artists" element={<Artists />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/downloads" element={<Download />} />
          <Route path="/shared" element={<Shared />} />
        </Routes>
      </div>
    </FavouriteSongsContextProvider>
  );
}

export default App
