import React, { useEffect, useState, useContext } from "react";
import "./styles/Albums.css";
import { Play, Shuffle } from "../assets/now-playing-icons";
import { ProfileHolder, GoBack } from "../assets/main-display-icons"; 
import {
  AlbumsCard,
  Sidebar,
  Navbar,
  Top100Weekly,
  NowPlaying,
  AlbumMusicCard,
  MyMusicCard,
  MusicPlayer
} from "../components";
import { db } from "../config/firebase";
import { doc, getDoc } from "firebase/firestore";
import { MusicPic } from "../assets/top100-icons";
import { AuthContext } from "../context/AuthenticationContext";
import { CurrentSongContext } from "../context/CurrentSong";
import { ThemeContext } from "../context/DarkMode";

function Albums() {

    const { playAlbumSong } = useContext(CurrentSongContext);
    const { playingSong } = useContext(CurrentSongContext);
    const { theme } = useContext(ThemeContext);

    const [allAlbums, setAllAlbums] = useState();
    const [clicked, setClicked] = useState(false)
    const [albumClicked, setAlbumClicked] = useState()

    useEffect(() => {
      const fetchData = async () => {
        try {
          const docRef = doc(db, "albums", "albums");
          const docSnapShot = await getDoc(docRef);

          if (docSnapShot.exists()) {
            const docData = docSnapShot.data();
            const dataArray = Object.values(docData);
            setAllAlbums(dataArray)
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
    <div className="home-page-main-container" id={theme}>
      <div className="sidebar-container">
        <Sidebar currentLink="Albums" />
      </div>
      <div className="col-2-main">
        <div className="user-navbar">
          <Navbar />
        </div>
        <div className="music-space-main">
          <div className="main-page-display">
            <div className="albums-main-container">
              <div className="albums-header-container">
                <div className="page-header-section">
                  {clicked ? (
                    <GoBack
                      className="go-back-icon"
                      onClick={() => setClicked(false)}
                    />
                  ) : (
                    ""
                  )}
                  <h1>Albums</h1>
                </div>
                <div className="albums-header-col-2">
                  <span>
                    <Play className="play-albums" />
                    Play
                  </span>
                  <span>
                    <Shuffle className="shuffle-albums" />
                    Shuffle
                  </span>
                </div>
              </div>
              {clicked ? (
                <div className="clicked-album-info">
                  <div className="clicked-albums-info-header">
                    <div className="album-cover-section">
                      <div className="albums-cover-container">
                        <img src={albumClicked[0]?.album.cover_big} />
                      </div>
                    </div>
                    <div className="album-info-section-1">
                      <div className="album-title-section">
                        <p>Album</p>
                        <h1>{albumClicked[0]?.album.title}</h1>
                      </div>
                      <div className="album-info-artist-year-song-count">
                        <div className="album-info-artist-cover">
                          <img src={albumClicked[0]?.artist.picture_big} />
                        </div>
                        <p>2023</p>
                        <p>{albumClicked.length} Songs</p>
                      </div>
                    </div>
                  </div>
                  <div className="album-songs-section-1">
                  {albumClicked.map((albumSong, idx) => {
                    return (
                      <AlbumMusicCard
                        songTitle={albumSong.title}
                        songArtist={albumSong.artist.name}
                        duration={albumSong.duration}
                        number={idx + 1}
                        playSong={() =>
                          playAlbumSong(albumSong.id, albumClicked)
                        }
                        songCurrentStyle={
                          playingSong?.id === albumSong.id ? playingSongsStyles : {}
                        }
                      />
                    );
                  })}
                </div>
                </div>
              ) : (
                <div className="albums-main-container-cards" id={theme}>
                  <div className="all-albums-main-container">
                    {allAlbums &&
                      allAlbums.map((album, idx) => {
                        return (
                          <AlbumsCard
                            albumArtist={album.data[0].artist.name}
                            albumTitle={album.data[0].album.title}
                            albumCover={album.data[0].album.cover_big}
                            onClick={() => {
                              setAlbumClicked(album.data);
                              setClicked(true);
                            }}
                          />
                        );
                      })}
                  </div>
                </div>
              )}
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

export default Albums;
