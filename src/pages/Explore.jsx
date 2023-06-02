import React from 'react'
import "./styles/Explore.css"
import { FeaturedAlbums, NewMusic, PlaylistsExplore, Sidebar, Navbar, Top100Weekly, NowPlaying } from '../components'

function Explore() {
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

export default Explore