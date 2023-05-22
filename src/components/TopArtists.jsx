import React from 'react'
import "./styles/TopArtists.css"
import TopArtistsCard from './TopArtistsCard'

function TopArtists() {
  return (
    <div className='top-artists-column'>
        <div className='top-artist-title'>
            <h2>TOP ARTISTS</h2>
            <p>More List</p>
        </div>
        <div className='actual-top-artists-list'>
            <TopArtistsCard />
            <TopArtistsCard />
            <TopArtistsCard />
            <TopArtistsCard />
            <TopArtistsCard />
            <TopArtistsCard />
        </div>
    </div>
  )
}

export default TopArtists