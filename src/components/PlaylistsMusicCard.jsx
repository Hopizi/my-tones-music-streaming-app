import React, { useContext } from 'react'
import './styles/PlaylistsMusicCard.css'
import {Like} from '../assets/navbar-icons'
import { Dots } from '../assets/main-display-icons'
import { ThemeContext } from '../context/DarkMode'

function PlaylistsMusicCard({musicTitle, artist, duration, songCover, Isliked}) {

    const {theme} = useContext(ThemeContext)

    function fmtMSS(s) {
      return (s - (s %= 60)) / 60 + (9 < s ? ":" : ":0") + s;
    }

  return (
    <div className='playlists-music-card' id={theme}>
        <div className="inner-playlist-music-card-main">
            <div className='my-playlist-music-cover-title-artist'>
                <div className='my-music-card-cover'>
                    <img src={songCover}/>
                </div>
                <div className='my-playlist-music-card-title-artist'>
                    <p>{musicTitle}</p>
                    <p>{artist}</p>
                </div>
            </div>
            <div className='my-playlist-music-card-time-like-others'>
                <p>{fmtMSS(duration)}</p>
                <Isliked />
                <Dots />
            </div>
        </div>
    </div>
  )
}

export default PlaylistsMusicCard