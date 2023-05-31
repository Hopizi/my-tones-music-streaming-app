import React from 'react'
import "./styles/Albums.css"
import {Play, Shuffle} from "../assets/now-playing-icons"
import { AlbumsCard } from '../components'

function Albums() {
  return (
    <div className='albums-main-container'>
        <div className='albums-header-container'>
            <h1>Albums</h1>
            <div className='albums-header-col-2'>
                <span>
                    <Play  className='play-albums'/>
                    Play
                </span>
                <span>
                    <Shuffle className='shuffle-albums'/>
                    Shuffle
                </span>
            </div>
        </div>
        <div className="albums-main-container-cards">
            <h1>11 Albums</h1>
            <div className='all-albums-main-container'>
                <AlbumsCard />
                <AlbumsCard />
                <AlbumsCard />
                <AlbumsCard />
                <AlbumsCard />
                <AlbumsCard />
                <AlbumsCard />
                <AlbumsCard />
                <AlbumsCard />
            </div>
        </div>
    </div>
  )
}

export default Albums