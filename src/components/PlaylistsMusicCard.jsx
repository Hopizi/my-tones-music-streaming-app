import React from 'react'
import './styles/PlaylistsMusicCard.css'
import {Like} from '../assets/navbar-icons'
import { Dots } from '../assets/main-display-icons'

function PlaylistsMusicCard({musicTitle, artist, duration}) {
  return (
    <div className='playlists-music-card'>
        <div className="inner-playlist-music-card-main">
            <div className='my-playlist-music-cover-title-artist'>
                <div className='my-music-card-cover'>

                </div>
                <div className='my-playlist-music-card-title-artist'>
                    <p>{musicTitle}</p>
                    <p>{artist}</p>
                </div>
            </div>
            <div className='my-playlist-music-card-time-like-others'>
                <p>{duration}</p>
                <Like />
                <Dots />
            </div>
        </div>
    </div>
  )
}

export default PlaylistsMusicCard