import React from 'react'
import "./styles/Artists.css"
import { ArtistsCard, ArtistsAlbumCard, AlbumsCard } from '../components'
import { Shuffle } from '../assets/main-display-icons'
import { Play } from '../assets/now-playing-icons'

function Artists() {
  return (
    <div className='artists-main-container'>
        <div className='artists-main-header-section'>
            <h1>Artists</h1>
        </div>
        <div className='artists-display-container'>
            <div className='main-artists-display-contianer'>
                <ArtistsCard />
                <ArtistsCard />
                <ArtistsCard />
                <ArtistsCard />
                <ArtistsCard />
                <ArtistsCard />
                <ArtistsCard />
                <ArtistsCard />
                <ArtistsCard />
                <ArtistsCard />
            </div>
            <div className='main-artists-info-display'>
                <div className="main-artists-info-header">
                    <div className='main-artists-info-header-text'>
                        <p>Ed Sheeran</p>
                        <p>2 Albums, 10 Songs</p>
                    </div>
                    <div className='main-artists-info-play-shuffle'>
                        <span>
                            <Play  className='play-main-artists'/>
                            Play
                        </span>
                        <span>
                            <Shuffle className='shuffle-main-artists'/>
                            Shuffle
                        </span>
                    </div>
                </div>
                <div className='artists-album-card-main'>
                    <ArtistsAlbumCard />
                    <ArtistsAlbumCard />
                </div>
                <div className='see-more-artist-info'>
                    <p>See More by Ed Sheeran</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Artists