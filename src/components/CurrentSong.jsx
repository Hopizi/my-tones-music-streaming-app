import React from 'react'
import "./styles/CurrentSong.css"
import { MusicPic } from '../assets/top100-icons'

function CurrentSong() {
  return (
    <div className='current-song-main-contianer'>
        <div className="current-song-image">
            <img src={MusicPic}/>
        </div>
        <div className="current-song-title-artist">
            <h2>Dynamite</h2>
            <p>BTS</p>
        </div>
    </div>
  )
}

export default CurrentSong