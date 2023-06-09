import React, { useEffect, useState } from 'react'
import "./styles/TopCollections.css"
import TopCollectionCard from './TopCollectionCard'
import {genres} from "../api/Genres"

function TopCollections() {
    
  const [genreinfo, setGenreInfo] = useState()

  useEffect(() => {
    setGenreInfo(genres.data)
  }, genreinfo)

  return (
    <div className='top-collections-main'>
        <div className='top-collections-header-section'>
            <h2>TOP COLLECTION</h2>
            <p>More List</p>
        </div>
        <div className='top-collections'>
            <div className='top-collection-actual-section'>
                {
                  genreinfo && 
                  genreinfo.map((genre, idx) => {
                      return <TopCollectionCard 
                      genreCover={genre.picture_big}
                      />
                  })
                } 
            </div>
        </div>
    </div>
  )
}

export default TopCollections