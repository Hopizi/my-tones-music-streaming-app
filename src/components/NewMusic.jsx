import React from 'react'
import "./styles/NewMusic.css"
import NewMusicCard from './NewMusicCard'

function NewMusic() {
  return (
    <div className='new-music-main-container'>
        <div className="new-music-header">
            <h2 className='explore-header-title'>New Music</h2>
            <p className='explore-header-title-2'>See All</p>
        </div>
        <div className='new-musics-container'>
            <NewMusicCard />
            <NewMusicCard />
            <NewMusicCard />
            <NewMusicCard />    
        </div>
    </div>
  )
}

export default NewMusic