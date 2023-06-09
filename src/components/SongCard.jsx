import React from 'react'
import "./styles/SongCard.css"
import {MusicPic, Dot} from "../assets/top100-icons"


function SongCard({songCover, songTitle, songArtist, songDuration, songPosition}) {

  function shortenTitle(str) {
    let length = 19;
    let ending = '...';

    if (str.length > length) {
      return str.substring(0, length - ending.length) + ending;
    }else {
      return str;
    }
  }

  return (
    <div className='song-card-main'>
        <div className='song-position-container'>
            <p className='song-index'>{songPosition}</p>
        </div>
        <div className='all-song-info'>
            <div className="song-cover">
            <img src={songCover}/>
            </div>
            <div className="title-artist">
                <p className='song-title'>{shortenTitle(songTitle)}</p>
                <p className='artist-name'>{songArtist}</p>
            </div>
        </div>
        <div className='song-duration-container'>
            <p>3:11</p>
        </div>
        <div className="dot-container">
            <Dot className='dot'/>
            <Dot className='dot'/>
        </div>
    </div>
  )
}

export default SongCard