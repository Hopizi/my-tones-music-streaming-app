import React from 'react'
import './styles/FeaturedAlbumsCard.css'

function FeaturedAlbumsCard({albumArtist, albumTitle, albumCover}) {
  return (
    <div className='featured-album-card-main'>
        <img src={albumCover}/>
        <div className='featured-album-card-info'>
            <p>{albumTitle}</p>
            <p>{albumArtist}</p>
        </div>
    </div>
  )
}

export default FeaturedAlbumsCard