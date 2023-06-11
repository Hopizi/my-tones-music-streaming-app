import React, { useEffect, useState } from 'react'
import "./styles/Top100Weekly.css"
import SongCard from './SongCard'
import {tracks} from "../api/Chart"

function Top100Weekly() {

  const [topTen, setTopTen] = useState()

  useEffect(() => {
    setTopTen(tracks.data)
  }, [])

  return (
    <div className='top-100-main-container'>
        <div className='top-header-sect'>
            <h1>TOP 100 WEEKLY</h1>
            <p>More list</p>
        </div>
        <div className='songs-card-container'>
            { topTen && 
              topTen.map((song, idx) => {
                return <SongCard 
                songCover={song.cover_big}
                songArtist={song.artist.name}
                songTitle={song.title}
                songPosition={song.position}
                />
              })
            }
        </div>
    </div>
  )
}

export default Top100Weekly