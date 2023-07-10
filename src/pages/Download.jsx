import React, { useContext } from "react";
import "./styles/Download.css";
import { PlayIcon, Shuffle } from "../assets/main-display-icons";
import {
  PlaylistsMusicCard,
  Sidebar,
  Navbar,
  Top100Weekly,
  NowPlaying,
} from "../components";
import { Like } from "../assets/navbar-icons";
import { HeartLike } from "../assets/main-display-icons";
import { ThemeContext } from "../context/DarkMode";

function Download() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="home-page-main-container" id={theme}>
      <div className="sidebar-container">
        <Sidebar currentLink="Downloads" />
      </div>
      <div className="col-2-main">
        <div className="user-navbar">
          <Navbar />
        </div>
        <div className="music-space-main">
          <div className="main-page-display">
            <div className="downloads-songs-main-container">
              <div className="downloads-header-section">
                <h1>Downloads</h1>
                <div className="downloads-header-section-col-2">
                  <span>
                    <PlayIcon className="play-downloads" />
                    Play
                  </span>
                  <span>
                    <Shuffle className="shuffle-downloads" />
                    Shuffle
                  </span>
                </div>
              </div>
              <div className="downloads-songs">
                <PlaylistsMusicCard
                  musicTitle={"Anyone"}
                  artist="Justin Bieber"
                  duration="167"
                  Isliked={HeartLike}
                />
              </div>
            </div>
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

export default Download;
