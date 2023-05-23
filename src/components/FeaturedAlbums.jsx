import React from 'react'
import './styles/FeaturedAlbums.css'
import FeaturedAlbumsCard from './FeaturedAlbumsCard'

function FeaturedAlbums() {
  return (
    <div className='featured-albums-main'>
        <div className='featured-albums-header'>
            <h2 className='explore-header-title'>Featured Album</h2>
            <p className='explore-header-title-2'>See All</p>
        </div>
        <div className='featured-albums-display'>
            <FeaturedAlbumsCard />
            <FeaturedAlbumsCard />
        </div>
    </div>
  )
}

export default FeaturedAlbums