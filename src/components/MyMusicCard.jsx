import React from 'react'
import "./styles/MyMusicCard.css"
import {Like} from '../assets/navbar-icons'
import { Dots } from '../assets/main-display-icons'

function MyMusicCard() {
  return (
    <div className='my-music-card-main'>
        <div className="inner-my-music-card-main">
            <div className='my-music-cover-title-artist'>
                <div className='my-music-card-cover'>

                </div>
                <div className='my-music-card-title-artist'>
                    <p>Anyone</p>
                    <p>Justin Bieber</p>
                </div>
            </div>
            <div className='my-music-card-time-like-others'>
                <p>3:23</p>
                <Like />
                <Dots />
            </div>
        </div>
    </div>
  )
}

export default MyMusicCard