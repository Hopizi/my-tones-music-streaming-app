import React from 'react'
import "./styles/Explore.css"
import { FeaturedAlbums, NewMusic, PlaylistsExplore } from '../components'

function Explore() {
  return (
    <div className='explore-main'>
        <h1>Explore</h1>
        <div className='featured-album-row-1'>
            <FeaturedAlbums />
        </div>
        <div className='new-music-row-2'>
            <NewMusic />
        </div>
        <div className='playlists-you-need-row-3'>
            <PlaylistsExplore />
        </div>
    </div>
  )
}

export default Explore