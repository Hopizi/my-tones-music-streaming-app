import React, { useEffect, useState } from 'react'
import "./styles/NewMusic.css"
import NewMusicCard from './NewMusicCard'
import {newMusic} from "../api/Music"
import { db } from "../config/firebase";
import { doc, getDoc } from "firebase/firestore";

function NewMusic() {

  const [music, setMusic] = useState()

  // useEffect(() => {
  //   setMusic(newMusic);
  // }, [])


  useEffect(() => {
    const fetchData = async () => {
      try {
        const docRef = doc(db, "music", "newMusic");
        const docSnapShot = await getDoc(docRef);

        if (docSnapShot.exists()) {
          const docData = docSnapShot.data();
          setMusic(docData.data);
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