import React from 'react'
import "./styles/Albums.css"
import {Play, Shuffle} from "../assets/now-playing-icons"
import { AlbumsCard, Sidebar, Navbar, Top100Weekly, NowPlaying } from '../components'

function Albums() {
  return (
    <div className='home-page-main-container'>
            <div className="sidebar-container">
                <Sidebar />
            </div>
            <div className='col-2-main'>
                <div className="user-navbar">
                    <Navbar />
                </div>
                <div className="music-space-main">
                    <div className='main-page-display'>
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
                    </div>
                    <div className='main-page-col-2'>
                        <div className="top-100-main">
                            <Top100Weekly />
                        </div>
                        <div className="now-playing-main-container">
                            <NowPlaying />
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Albums