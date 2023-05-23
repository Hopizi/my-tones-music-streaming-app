import React from 'react'
import "./styles/HomePage.css"
import { Sidebar, Navbar, Top100Weekly, NowPlaying,} from '../components' 
import { Discover, Explore } from '../pages'

function HomePage() {
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
                    <Explore />
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

export default HomePage