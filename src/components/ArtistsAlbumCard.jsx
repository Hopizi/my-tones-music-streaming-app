import React from 'react'
import "./styles/ArtistsAlbumCard.css"

function ArtistsAlbumCard({songCover, songArtist, songTitle}) {

  function shortenTitle(str) {
    let length = 19;
    let ending = "...";

    if (str.length > length) {
      return str.substring(0, length - ending.length) + ending;
    } else {
      return str;
    }
  }

  return (
    <div className='artist-album-card-main'>
        <div className='artist-album-card-cover'>
            <img src={songCover}/>
        </div>
        <div className='artist-album-card-info'>
            <p>{shortenTitle(songTitle)}</p>
        </div>
    </div>
  )
}

export default ArtistsAlbumCard