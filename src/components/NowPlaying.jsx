import React from 'react'
import "./styles/NowPlaying.css"
import CurrentSong from './CurrentSong'

function NowPlaying() {
  return (
    <div className='now-playing-main'>
        <p>NOW PLAYING</p>
        <div className="curently-playing-song">
            <CurrentSong />
        </div>
        <div className="song-current-info">

        </div>
    </div>
  )
}

export default NowPlaying