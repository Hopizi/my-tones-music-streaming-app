import React, { useEffect, useState } from 'react'
import "./styles/TopArtists.css"
import TopArtistsCard from './TopArtistsCard'
import {topArtists} from "../api/TopArtists"
import { doc, getDoc } from "firebase/firestore";
import { db } from '../config/firebase'

function TopArtists() {

  const [topsixArtists, setTopSixArtist] = useState()

  // useEffect(() => {
  //   setTopSixArtist(topArtists.data);
  // }, topsixArtists)

  useEffect(() => {
    const fetchData = async () => {
      try{
        const docRef = doc(db, "artist", "topArtists");
        const docSnapShot = await getDoc(docRef)

        if(docSnapShot.exists()) {
          const docData = docSnapShot.data();
          setTopSixArtist(docData.data)
        } else {
          console.log("document does not exixts")
        }
      }catch (error) {
        console.log(error)
      }
    }

    fetchData()
  },[])

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