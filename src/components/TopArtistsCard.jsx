import React from 'react'
import "./styles/TopArtistsCard.css"

function TopArtistsCard({topArtistCover, topArtistName}) {
  return (
    <div className='top-artists-card-main'>
        <div className='top-artist-image-card'>
            <img src={topArtistCover}/>
        </div>
        <div className='top-artist-name-plays'>
            <p className='top-artist-name'>{topArtistName}</p>
            <p>30M Plays</p>
        </div>
    </div>
  )
}

export default TopArtistsCard