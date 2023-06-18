import React, { useEffect, useState } from 'react'
import './styles/FeaturedAlbums.css'
import FeaturedAlbumsCard from './FeaturedAlbumsCard'
import {featuredAlbums} from "../api/Albums"
import { db } from "../config/firebase";
import { doc, getDoc } from "firebase/firestore";

function FeaturedAlbums() {

  const [featured, setFeatured] = useState();

  useEffect(() => {
    if (featuredAlbums) {
      setFeatured(featuredAlbums);
    }
    console.log(featured);
  }, [featured])

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const docRef = doc(db, "albums", "featuredAlbums");
  //       const docSnapShot = await getDoc(docRef);

  //       if (docSnapShot.exists()) {
  //         const docData = docSnapShot.data();
  //         console.log(docData)
  //         setFeatured(docData);
  //       } else {
  //         console.log("document does not exixts");
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   fetchData();
  // }, []);

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