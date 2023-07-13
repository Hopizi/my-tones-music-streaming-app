import React, { useEffect, useState, useContext } from 'react'
import "./styles/Top100Weekly.css"
import SongCard from './SongCard'
import {tracks} from "../api/Chart"
import { db } from "../config/firebase";
import { doc, getDoc } from "firebase/firestore";
import { CurrentSongContext } from '../context/CurrentSong';
import { ThemeContext } from '../context/DarkMode';

function Top100Weekly() {

  const { playTopSong } = useContext(CurrentSongContext);
  const { playingSong } = useContext(CurrentSongContext);

  const { theme } = useContext(ThemeContext);

  const [topTen, setTopTen] = useState()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const docRef = doc(db, "music", "tracks");
        const docSnapShot = await getDoc(docRef);

        if (docSnapShot.exists()) {
          const docData = docSnapShot.data();
          console.log(docData)
         setTopTen(docData.data);
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
    <div className='top-100-main-container' id={theme}>
        <div className='top-header-sect'>
            <h1>TOP 10 WEEKLY</h1>
            <p>More list</p>
        </div>
        <div className='songs-card-container'>
            { topTen && 
              topTen.map((song, idx) => {
                return (
                  <SongCard
                    key={idx}
                    songCover={song.cover_big}
                    songArtist={song.artist.name}
                    songTitle={song.title}
                    songPosition={song.position}
                    playSong={() => playTopSong(song.id)}
                    songCurrentStyle={
                      playingSong?.id === song.id ? playingSongsStyles : {}
                    }
                    duration={song.duration}
                  />
                );
              })
            }
        </div>
    </div>
  )
}

export default Top100Weekly