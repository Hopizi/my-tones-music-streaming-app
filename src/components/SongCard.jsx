import React from 'react'
import "./styles/SongCard.css"
import {MusicPic, Dot} from "../assets/top100-icons"

function SongCard() {
  return (
    <div className='song-card-main'>
        <p className='song-index'>01</p>
        <div className='all-song-info'>
            <div className="song-cover">
            <img src={MusicPic}/>
            </div>
            <div className="title-artist">
                <p className='song-title'>Anyone</p>
                <p className='artist-name'>Justin Bieber</p>
            </div>
        </div>
        <p>03:11</p>
        <div className="dot-container">
            <Dot className='dot'/>
            <Dot className='dot'/>
        </div>
    </div>
  )
}

export default SongCard