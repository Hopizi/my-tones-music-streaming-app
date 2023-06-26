import React, { useContext } from "react";
import "./styles/Shared.css";
import { PlayIcon, Shuffle } from "../assets/main-display-icons";
import {
  PlaylistsMusicCard,
  Sidebar,
  Navbar,
  Top100Weekly,
  NowPlaying,
} from "../components";
import { ThemeContext } from "../context/DarkMode";

function Shared() {

  const {theme} = useContext(ThemeContext)

  return (
    <div className="home-page-main-container" id={theme}>
      <div className="sidebar-container">
        <Sidebar currentLink="Shared" />
      </div>
      <div className="col-2-main">
        <div className="user-navbar">
          <Navbar />
        </div>
        <div className="music-space-main">
          <div className="main-page-display">
            <div className="shared-songs-main-container">
              <div className="shared-header-section">
                <h1>Shared Songs</h1>
                <div className="shared-header-section-col-2">
                  <span>
                    <PlayIcon className="play-shared" />
                    Play
                  </span>
                  <span>
                    <Shuffle className="shuffle-shared" />
                    Shuffle
                  </span>
                </div>
              </div>
              <div className="shared-songs">
                <PlaylistsMusicCard
                  musicTitle={"Anyone"}
                  artist="Justin Bieber"
                  duration="3:21"
                />
              </div>
            </div>
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

export default Shared;
