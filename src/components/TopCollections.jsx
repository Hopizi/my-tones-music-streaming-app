import React, { useEffect, useState } from 'react'
import "./styles/TopCollections.css"
import TopCollectionCard from './TopCollectionCard'
import {genres} from "../api/Genres"
import { db } from "../config/firebase";
import { doc, getDoc } from "firebase/firestore";

function TopCollections() {
    
  const [genreinfo, setGenreInfo] = useState()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const docRef = doc(db, "music", "genres");
        const docSnapShot = await getDoc(docRef);

        if (docSnapShot.exists()) {
          const docData = docSnapShot.data();
          setGenreInfo(docData.data)
        } else {
          console.log("document does not exixts");
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

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