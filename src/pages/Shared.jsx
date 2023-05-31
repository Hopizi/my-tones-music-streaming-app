import React from 'react'
import './styles/Shared.css'
import {PlayIcon, Shuffle} from "../assets/main-display-icons"
import { PlaylistsMusicCard } from '../components'

function Shared() {
  return (
    <div className='shared-songs-main-container'>
        <div className="shared-header-section">
            <h1>Shared Songs</h1>
            <div className='shared-header-section-col-2'>
                <span>
                    <PlayIcon  className='play-shared'/>
                    Play
                </span>
                <span>
                    <Shuffle className='shuffle-shared'/>
                    Shuffle
                </span>
            </div>
        </div>
        <div className='shared-songs'>
            <PlaylistsMusicCard 
            musicTitle={"Anyone"}
            artist="Justin Bieber"
            duration='3:21'
            />
        </div>
    </div>
  )
}

export default Shared