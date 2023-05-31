import React from 'react'
import "./styles/MyMusic.css"
import { MyMusicCard } from '../components'
import {Play, Shuffle} from "../assets/now-playing-icons"

function MyMusic() {
  return (
    <div className='my-music-main-container'>
        <div className="my-music-header-section">
            <h1>My Music</h1>
            <div className='my-music-header-section-col-2'>
                <span>
                    <Play  className='play-my-music'/>
                    Play
                </span>
                <span>
                    <Shuffle className='shuffle-my-music'/>
                    Shuffle
                </span>
            </div>
        </div>
        <div className='my-music-cards-container'>
            <MyMusicCard />
            <MyMusicCard />
            <MyMusicCard />
            <MyMusicCard />
            <MyMusicCard />
            <MyMusicCard />
            <MyMusicCard />
            <MyMusicCard />
        </div>
    </div>
  )
}

export default MyMusic