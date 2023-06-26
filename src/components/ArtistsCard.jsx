import React from 'react'
import "./styles/ArtistsCard.css"

function ArtistsCard({artistCover, artistName, id, onClick, currentArtist}) {
  return (
    <div className='artists-card-main-container' onClick={onClick} style={currentArtist}>
        <div className='artists-card-cover-image'>
            <img src={artistCover}/>
        </div>
        <p>{artistName}</p>
    </div>
  )
}

export default ArtistsCard