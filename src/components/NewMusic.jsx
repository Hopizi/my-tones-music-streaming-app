import React, { useEffect, useState } from 'react'
import "./styles/NewMusic.css"
import NewMusicCard from './NewMusicCard'
import {newMusic} from "../api/Music"

function NewMusic() {

  const [music, setMusic] = useState()

  useEffect(() => {
    setMusic(newMusic);
    console.log(newMusic)
  }, music)

  return (
    <div className='new-music-main-container'>
        <div className="new-music-header">
            <h2 className='explore-header-title'>New Music</h2>
            <p className='explore-header-title-2'>See All</p>
        </div>
        <div className='new-musics-container'>
            {
              music && 
              music.map((song, indx) => {
                return <NewMusicCard 
                musicArtist={song.artist.name}
                musicTitle={song.title}
                musicCover={song.album.cover_big}
                />
              })
            }
        </div>
    </div>
  )
}

export default NewMusic