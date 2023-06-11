import React, { useEffect, useState } from 'react'
import './styles/FeaturedAlbums.css'
import FeaturedAlbumsCard from './FeaturedAlbumsCard'
import {featuredAlbums} from "../api/Albums"

function FeaturedAlbums() {

  const [featured, setFeatured] = useState();

  useEffect(() => {
    if (featuredAlbums) {
      setFeatured(featuredAlbums);
    }
    console.log(featured);
  }, [featured])

  return (
    <div className="featured-albums-main">
      <div className="featured-albums-header">
        <h2 className="explore-header-title">Featured Album</h2>
        <p className="explore-header-title-2">See All</p>
      </div>
      <div className="featured-albums-display">
        { featured &&
          featured.map((album, idx) => {
            return (<FeaturedAlbumsCard 
            albumArtist={album.artist.name}
            albumTitle={album.title}
            albumCover={album.cover_big}
            />)
          })
          }
      </div>
    </div>
  );
}

export default FeaturedAlbums