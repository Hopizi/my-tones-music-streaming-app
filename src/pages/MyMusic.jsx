import React, { useEffect, useState } from "react";
import "./styles/MyMusic.css";
import {
  MyMusicCard,
  Sidebar,
  Navbar,
  Top100Weekly,
  NowPlaying,
} from "../components";
import { Play, Shuffle } from "../assets/now-playing-icons";
import {myMusic} from "../api/Music"

function MyMusic() {

    const [musicSec, setMusicSec] = useState()

    useEffect(() => {
        setMusicSec(myMusic);
    }, [])

  return (
    <div className="home-page-main-container">
      <div className="sidebar-container">
        <Sidebar />
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
                  <span>
                    <Play className="play-my-music" />
                    Play
                  </span>
                  <span>
                    <Shuffle className="shuffle-my-music" />
                    Shuffle
                  </span>
                </div>
              </div>
              <div className="my-music-cards-container">
                {
                    musicSec&&
                    musicSec.map((song, idx) => {
                        return <MyMusicCard 
                        songArtist={song.artist.name}
                        songTitle={song.title}
                        songCover={song.album.cover_big}
                        />
                    })
                }
              </div>
            </div>
          </div>
          <div className="main-page-col-2">
            <div className="top-100-main">
              <Top100Weekly />
            </div>
            <div className="now-playing-main-container">
              <NowPlaying />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyMusic;
