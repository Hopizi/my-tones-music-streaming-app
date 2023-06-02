import React from 'react'
import './styles/Favourites.css'
import {PlayIcon, Shuffle} from "../assets/main-display-icons"
import { PlaylistsMusicCard, Sidebar, Navbar, Top100Weekly, NowPlaying  } from '../components'

function Favourites() {
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
                        <div className='favourites-songs-main-container'>
                            <div className="favourite-header-section">
                                <h1>Favourites</h1>
                                <div className='favourite-header-section-col-2'>
                                    <span>
                                        <PlayIcon  className='play-favourite'/>
                                        Play
                                    </span>
                                    <span>
                                        <Shuffle className='shuffle-favourite'/>
                                        Shuffle
                                    </span>
                                </div>
                            </div>
                            <div className='favourite-songs'>
                                <PlaylistsMusicCard 
                                musicTitle={"Anyone"}
                                artist="Justin Bieber"
                                duration='3:21'
                                />
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

export default Favourites