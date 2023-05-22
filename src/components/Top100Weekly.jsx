import React from 'react'
import "./styles/Top100Weekly.css"
import SongCard from './SongCard'

function Top100Weekly() {
  return (
    <div className='top-100-main-container'>
        <div className='top-header-sect'>
            <h1>TOP 100 WEEKLY</h1>
            <p>More list</p>
        </div>
        <div className='songs-card-container'>
            <SongCard />
            <SongCard />
            <SongCard />
        </div>
    </div>
  )
}

export default Top100Weekly