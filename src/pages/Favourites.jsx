import React, {useContext, useEffect, useState} from 'react'
import './styles/Favourites.css'
import {PlayIcon, Shuffle} from "../assets/main-display-icons"
import { PlaylistsMusicCard, Sidebar, Navbar, Top100Weekly, NowPlaying, MusicPlayer  } from '../components'
import { ThemeContext } from '../context/DarkMode' 
import { AuthContext } from '../context/AuthenticationContext'
import { FavouriteSongsContext } from '../context/FavouriteSongs'
import {doc, getDoc, onSnapshot } from "firebase/firestore";
import { db } from "../config/firebase";
import { Like } from "../assets/navbar-icons";
import { HeartLike } from "../assets/main-display-icons";
function Favourites() {

  const { theme } = useContext(ThemeContext);
  const { currentUser } = useContext(AuthContext);
  const {favouritesSongs} = useContext(FavouriteSongsContext)

  const [favouriteSongsData, setFavouriteSongsData] = useState([])
  const [myMusicData, setMyMusicData] = useState([])

  useEffect(() => {
    const userId = currentUser.uid;

    const docRef = doc(db, "usersPreferences", userId);
    const unSubscribe = onSnapshot(docRef, (docSnapShot) => {
      if (docSnapShot.exists()) {
        const docData = docSnapShot.data();
        const favSongs = docData.favoriteSongs;
        const favData = myMusicData.filter((song) => favSongs.includes(song.id));
        setFavouriteSongsData(favData);
        console.log(favData)
      } else {
        console.log("Not Found");
      }
    });
    return () => {
      unSubscribe();
    };
  }, [myMusicData])

  useEffect(() => {
    async function getAllMyMusic() {
      try {
        const docRef = doc(db, "music", "myMusic");
        const docSnapShot = await getDoc(docRef);

        if (docSnapShot.exists()) {
          const docData = docSnapShot.data();
          const dataArray = Object.values(docData);
          setMyMusicData(dataArray);
        } else {
          console.log("document does not exixts");
        }
      } catch (error) {
        console.log(error);
      }
    }

    getAllMyMusic();
  }, [])

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
                <div className="favourite-header-section-col-2">
                  <span>
                    <PlayIcon className="play-favourite" />
                    Play
                  </span>
                  <span>
                    <Shuffle className="shuffle-favourite" />
                    Shuffle
                  </span>
                </div>
              </div>
              <div className="favourite-songs">
                {
                  favouriteSongsData.map((song, idx) => {
                    return (
                      <PlaylistsMusicCard
                        musicTitle={song.title}
                        artist={song.artist.name}
                        duration={song.duration}
                        songCover={song.album.cover_big}
                        Isliked={
                          favouritesSongs.includes(song.id) ? HeartLike : Like
                        }
                      />
                    );
                  })
                }
              </div>
            </div>
            <MusicPlayer />
          </div>
          <div className="main-page-col-2">
            <div className="top-100-main">
              <Top100Weekly />
            </div>
            {/* <div className="now-playing-main-container">
              <NowPlaying />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Favourites