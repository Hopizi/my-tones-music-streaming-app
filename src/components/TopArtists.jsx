import React, { useEffect, useState } from 'react'
import "./styles/TopArtists.css"
import TopArtistsCard from './TopArtistsCard'
import {topArtists} from "../api/TopArtists"

function TopArtists() {

  const [topsixArtists, setTopSixArtist] = useState()

  useEffect(() => {
    setTopSixArtist(topArtists.data);
  }, topsixArtists)

  return (
    <div className='top-artists-column'>
        <div className='top-artist-title'>
            <h2>TOP ARTISTS</h2>
            <p>More List</p>
        </div>
        <div className='top-artist-list-main'>
            <div className='actual-top-artists-list'>
              {
                topsixArtists && 
                topsixArtists.map((artist, idx) => {
                  return <TopArtistsCard 
                  topArtistCover={artist.picture_medium}
                  topArtistName={artist.name}
                  />
                })
              }
            </div>
        </div>
    </div>
  )
}

export default TopArtists