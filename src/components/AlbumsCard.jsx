import React from 'react'
import "./styles/AlbumsCard.css"

function AlbumsCard({albumArtist, albumCover, albumTitle}) {

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
    <div className='albums-card-main'>
        <div className='albums-card-main-cover'>
          <img src={albumCover}/>
        </div>
        <div className='albums-card-main-info'>
            <p>{shortenTitle(albumTitle)}</p>
            <p>{albumArtist}</p>
        </div>
    </div>
  )
}

export default AlbumsCard