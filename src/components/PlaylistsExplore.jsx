import React from 'react'
import "./styles/PlaylistsExplore.css"
import PlaylistsExploreCard from './PlaylistsExploreCard'

function PlaylistsExplore() {
  return (
    <div className='playlist-main-container'>
        <div className="playlist-main-header">
            <h2 className='explore-header-title'>Playlists You Need</h2>
        </div>
        <div className="playlists-items-container">
            <PlaylistsExploreCard />
            <PlaylistsExploreCard />
            <PlaylistsExploreCard />
            <PlaylistsExploreCard />
        </div>
    </div>
  )
}

export default PlaylistsExplore