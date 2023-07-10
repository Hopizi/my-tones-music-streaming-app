import React, { useEffect, useState, useContext } from "react";
import "./styles/MyMusic.css";
import {
  MyMusicCard,
  Sidebar,
  Navbar,
  Top100Weekly,
  MusicPlayer,
} from "../components";
import { Play, Shuffle } from "../assets/now-playing-icons";
import { db } from "../config/firebase";
import { doc, getDoc } from "firebase/firestore";
import { AuthContext } from "../context/AuthenticationContext";
import { CurrentSongContext } from "../context/CurrentSong";
import { ThemeContext } from "../context/DarkMode";
import { FavouriteSongsContext } from "../context/FavouriteSongs";
import { Like } from "../assets/navbar-icons";
import { HeartLike } from "../assets/main-display-icons";

function MyMusic() {

  const { currentUser } = useContext(AuthContext);
  const { getClickedSong } = useContext(CurrentSongContext);
  const { playPlaylist } = useContext(CurrentSongContext);
  const { playingSong } = useContext(CurrentSongContext);
  const { theme } = useContext(ThemeContext);
  const { favouritesSongs, addFavourite } = useContext(FavouriteSongsContext);

  const [musicSec, setMusicSec] = useState();
  const [playlists, setPlaylists] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const docRef = doc(db, "music", "myMusic");
        const docSnapShot = await getDoc(docRef);

        if (docSnapShot.exists()) {
          const docData = docSnapShot.data();
          const dataArray = Object.values(docData);
          setMusicSec(dataArray);
        } else {
          console.log("document does not exixts");
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    let songsInfo = []
    musicSec?.forEach(song => {
      songsInfo.push({
        preview: song.preview,
        cover_big: song.album.cover_big,
        title: song.title,
        artist: song.artist.name,
        id: song.id
      })
    })
    console.log(songsInfo)
    setPlaylists(songsInfo);
  }, [musicSec])

  const playingSongsStyles = {
    color: "#4343ef",
  };

  return (
    <div className="home-page-main-container" id={theme}>
      <div className="sidebar-container">
        <Sidebar currentLink="My Music" />
      </div>
      <div className="col-2-main">
        <div className="user-navbar">
          <Navbar />
        </div>
        <div className="music-space-main">
          <div className="main-page-display">
            <div className="my-music-main-container">
              <div className="my-music-header-section">
                <h1>My Music</h1>
                <div className="my-music-header-section-col-2">
                  <span
                    onClick={() => {
                      playPlaylist(playlists, false);
                    }}
                  >
                    <Play className="play-my-music" />
                    Play
                  </span>
                  <span
                    onClick={() => {
                      playPlaylist(playlists, true);
                    }}
                  >
                    <Shuffle className="shuffle-my-music" />
                    Shuffle
                  </span>
                </div>
              </div>
              <div className="my-music-cards-container">
                {musicSec &&
                  musicSec.map((song, idx) => {
                    return (
                      <MyMusicCard
                        songArtist={song.artist.name}
                        songTitle={song.title}
                        songCover={song.album.cover_big}
                        key={idx}
                        onClick={() => addFavourite(song.id)}
                        IsLiked={
                          favouritesSongs.includes(song.id) ? HeartLike : Like
                        }
                        playSong={() =>
                          getClickedSong(song.id, "music", "myMusic")
                        }
                        songCurrentStyle={
                          playingSong?.id === song.id ? playingSongsStyles : {}
                        }
                        duration={song.duration}
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

export default MyMusic;
