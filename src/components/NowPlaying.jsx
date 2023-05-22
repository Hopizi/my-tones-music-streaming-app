import React from 'react'
import "./styles/NowPlaying.css"
import CurrentSong from './CurrentSong'
import { Shuffle, Previous, Pause, Play, Next, Repeat } from '../assets/now-playing-icons'

function NowPlaying() {
  return (
    <div className='now-playing-main'>
        <p>NOW PLAYING</p>
        <div className="curently-playing-song">
            <CurrentSong />
        </div>
        <div className="song-current-info">
            <div className="song-progress">
                <div className="song-slider">
                    <div className='inner-song-slider' style={{width: '70%'}}></div>
                </div>
                <div className="time-remaining">
                    <p>2:18</p>
                    <p>4:15</p>
                </div>
            </div>
            <div className="song-control-feature">
                <Shuffle />
                <Previous />
                <div className='pause-play-container'>
                    <Pause className='pause-play'/>
                </div>
                <Next />
                <Repeat />
            </div>
        </div>
    </div>
  )
}

export default NowPlaying