import React from 'react'
import './styles/Favourites.css'
import {PlayIcon, Shuffle} from "../assets/main-display-icons"
import { PlaylistsMusicCard } from '../components'

function Favourites() {
  return (
    <div className='favourites-songs-main-container'>
        <div className="favourite-header-section">
            <h1>Favourites</h1>
            <div className='favourite-header-section-col-2'>
                <span>
                    <PlayIcon  className='play-favourite'/>
                    Play
                </span>
                <span>
                    <Shuffle className='shuffle-favourite'/>
                    Shuffle
                </span>
            </div>
        </div>
        <div className='favourite-songs'>
            <PlaylistsMusicCard 
            musicTitle={"Anyone"}
            artist="Justin Bieber"
            duration='3:21'
            />
        </div>
    </div>
  )
}

export default Favourites