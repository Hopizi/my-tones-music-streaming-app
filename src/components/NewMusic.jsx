import React, { useEffect, useState, useContext } from 'react'
import "./styles/NewMusic.css"
import NewMusicCard from './NewMusicCard'
import {newMusic} from "../api/Music"
import { db } from "../config/firebase";
import { doc, getDoc } from "firebase/firestore";
import { CurrentSongContext } from "../context/CurrentSong";

function NewMusic() {

  const [music, setMusic] = useState([])

  const { getClickedSong } = useContext(CurrentSongContext);
  const { playingSong } = useContext(CurrentSongContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const docRef = doc(db, "music", "newMusic");
        const docSnapShot = await getDoc(docRef);

        if (docSnapShot.exists()) {
          const docData = docSnapShot.data();
          const dataArray = Object.values(docData);
          setMusic(dataArray);
        } else {
          console.log("document does not exixts");
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const playingSongsStyles = {
    color: "#4343ef",
  };

  return (
    <div className='new-music-main-container'>
        <div className="new-music-header">
            <h2 className='explore-header-title'>New Music</h2>
            <p className='explore-header-title-2'>See All</p>
        </div>
        <div className='new-musics-container'>
            {
              music && 
              music.map((song, idx) => {
                return (
                  <NewMusicCard
                    musicArtist={song.artist.name}
                    musicTitle={song.title}
                    musicCover={song.album.cover_big}
                    playSong={() =>
                      getClickedSong(song.id, "music", "newMusic")
                    }
                    songCurrentStyle={
                      playingSong?.id === song.id ? playingSongsStyles : {}
                    }
                  />
                );
              })
            }
        </div>
    </div>
  )
}

export default NewMusic