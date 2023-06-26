import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { AuthContextProvider } from './context/AuthenticationContext.jsx'
import { CurrentSongContextProvider } from './context/CurrentSong.jsx'
import { ThemeContextProvider } from './context/DarkMode.jsx'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeContextProvider>
        <CurrentSongContextProvider>
          <AuthContextProvider>
            <App />
          </AuthContextProvider>
        </CurrentSongContextProvider>
      </ThemeContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
