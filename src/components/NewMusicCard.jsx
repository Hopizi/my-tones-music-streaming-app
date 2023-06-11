import React from 'react'
import "./styles/NewMusicCard.css"

function NewMusicCard({musicArtist, musicTitle, musicCover}) {

  function shortenTitle(str) {
    let length = 17;
    let ending = "...";

    if (str.length > length) {
      return str.substring(0, length - ending.length) + ending;
    } else {
      return str;
    }
  }

  return (
    <div className='new-music-card-main'>
        <div className='new-music-card-main-cover-img'>
          <img src={musicCover}/>
        </div>
        <div className="new-music-card-info">
            <p>{shortenTitle(musicTitle)}</p>
            <p>{musicArtist}</p>
        </div>
    </div>
  )
}

export default NewMusicCard