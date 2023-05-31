import React from 'react'
import './styles/Download.css'
import {PlayIcon, Shuffle} from "../assets/main-display-icons"
import { PlaylistsMusicCard } from '../components'

function Download() {
  return (
    <div className='downloads-songs-main-container'>
        <div className="downloads-header-section">
            <h1>Downloads</h1>
            <div className='downloads-header-section-col-2'>
                <span>
                    <PlayIcon  className='play-downloads'/>
                    Play
                </span>
                <span>
                    <Shuffle className='shuffle-downloads'/>
                    Shuffle
                </span>
            </div>
        </div>
        <div className='downloads-songs'>
            <PlaylistsMusicCard 
            musicTitle={"Anyone"}
            artist="Justin Bieber"
            duration='3:21'
            />
        </div>
    </div>
  )
}

export default Download