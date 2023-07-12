import React, {useContext, useEffect, useState} from 'react'
import './styles/Favourites.css'
import {PlayIcon, Shuffle} from "../assets/main-display-icons"
import { PlaylistsMusicCard, Sidebar, Navbar, Top100Weekly, NowPlaying, MusicPlayer, ToastNotifications  } from '../components'
import { ThemeContext } from '../context/DarkMode' 
import { AuthContext } from '../context/AuthenticationContext'
import { FavouriteSongsContext } from '../context/FavouriteSongs'
import {doc, getDoc, onSnapshot } from "firebase/firestore";
import { db } from "../config/firebase";
import { CurrentSongContext } from '../context/CurrentSong'

function Favourites() {

  const { theme } = useContext(ThemeContext);
  const { currentUser } = useContext(AuthContext);
  const { playFavouriteSongs } = useContext(CurrentSongContext);
  const { playPlaylist, playingSong } = useContext(CurrentSongContext);

  const [favouriteSongsData, setFavouriteSongsData] = useState([])
  const [playlists, setPlaylists] = useState();
  

  useEffect(() => {
    const userId = currentUser.uid;

    const docRef = doc(db, "usersPreferences", userId);
    const unSubscribe = onSnapshot(docRef, (docSnapShot) => {
      if (docSnapShot.exists()) {
        const docData = docSnapShot.data();
        const favSongs = docData.favoriteSongs;
        setFavouriteSongsData(favSongs);
      } else {
        console.log("Not Found");
      }
    });
    return () => {
      unSubscribe();
    };
  }, [])
  
  useEffect(() => {
    let songsInfo = [];
    favouriteSongsData?.forEach((song) => {
      songsInfo.push({
        preview: song.preview,
        cover_big: song.cover,
        title: song.title,
        artist: song.artist,
        id: song.id,
      });
    });
    console.log(songsInfo);
    setPlaylists(songsInfo);
  }, [favouriteSongsData]);

  const playingSongsStyles = {
    color: "#4343ef",
  };

  return (
    <div className="home-page-main-container" id={theme}>
      <div className="sidebar-container">
        <Sidebar currentLink="Favourites" />
      </div>
      <div className="col-2-main">
        <div className="user-navbar">
          <Navbar />
        </div>
        <div className="music-space-main">
          <div className="main-page-display">
            <div className="favourites-songs-main-container">
              <div className="favourite-header-section">
                <h1>Favourites</h1>
                {favouriteSongsData && (
                  <div className="favourite-header-section-col-2">
                    <span
                      onClick={() => {
                        playPlaylist(playlists, false);
                      }}
                    >
                      <PlayIcon className="play-favourite" />
                      Play
                    </span>
                    <span
                      onClick={() => {
                        playPlaylist(playlists, true);
                      }}
                    >
                      <Shuffle className="shuffle-favourite" />
                      Shuffle
                    </span>
                  </div>
                )}
              </div>
              <div className="favourite-songs">
                {favouriteSongsData.map((song, idx) => {
                  return (
                    <PlaylistsMusicCard
                      musicTitle={song.title}
                      artist={song.artist}
                      duration={song.duration}
                      songCover={song.cover}
                      playSong={() =>
                        playFavouriteSongs(
                          song.id,
                          song.artist,
                          song.title,
                          song.cover,
                          song.preview,
                          song.duration
                        )
                      }
                      songCurrentStyle={
                        playingSong?.id === song.id ? playingSongsStyles : {}
                      }
                    />
                  );
                })}
              </div>
            </div>
            <MusicPlayer />
          </div>
          <div className="main-page-col-2">
            <div className="top-100-main">
              <Top100Weekly />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Favourites