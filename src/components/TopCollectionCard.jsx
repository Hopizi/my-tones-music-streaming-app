import React from 'react'
import './styles/TopCollectionCard.css'
import { Play } from '../assets/now-playing-icons'

function TopCollectionCard() {
  return (
    <div className='top-collection-card-main'>
        <div className='play-btn-container'>
            <Play className='play-btn'/>
        </div>
    </div>
  )
}

export default TopCollectionCard