import React from 'react'
import './styles/TopCollectionCard.css'
import { Play } from '../assets/now-playing-icons'

function TopCollectionCard({genreCover}) {
  return (
    <div className='top-collection-card-main'>
      <img src={genreCover}/>
        <div className='play-btn-container'>
            <Play className='play-btn'/>
        </div>
    </div>
  )
}

export default TopCollectionCard