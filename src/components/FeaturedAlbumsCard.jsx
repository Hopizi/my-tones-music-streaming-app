import React from 'react'
import './styles/FeaturedAlbumsCard.css'

function FeaturedAlbumsCard({albumArtist, albumTitle, albumCover, onClick}) {
  return (
    <div className='featured-album-card-main' onClick={onClick}>
        <img src={albumCover}/>
        <div className='featured-album-card-info'>
            <p>{albumTitle}</p>
            <p>{albumArtist}</p>
        </div>
    </div>
  )
}

export default FeaturedAlbumsCard