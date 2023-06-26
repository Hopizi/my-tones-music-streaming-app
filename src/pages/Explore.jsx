import React, {useContext, useEffect, useState} from "react";
import "./styles/Explore.css";
import {
  FeaturedAlbums,
  NewMusic,
  PlaylistsExplore,
  Sidebar,
  Navbar,
  Top100Weekly,
  NowPlaying,
  MusicPlayer,
  FeaturedAlbumInfo
} from "../components";
import { ThemeContext } from "../context/DarkMode";
import {GoBack} from "../assets/main-display-icons";

function Explore() {

  const { theme } = useContext(ThemeContext);

  const [clicked, setClicked] = useState(false);
  const [albumClicked, setAlbumClicked] = useState();

  useEffect(() => {
    console.log(albumClicked)
  },[clicked])

  return (
    <div className="home-page-main-container" id={theme}>
      <div className="sidebar-container">
        <Sidebar currentLink="Explorer" />
      </div>
      <div className="col-2-main">
        <div className="user-navbar">
          <Navbar />
        </div>
        <div className="music-space-main">
          <div className="main-page-display">
            <div className="explore-main">
              <div className="page-header-section">
                {clicked ? (
                  <GoBack
                    className="go-back-icon"
                    onClick={() => setClicked(false)}
                  />
                ) : (
                  ""
                )}
                <h1>Explore</h1>
              </div>
              {clicked ? (
                <FeaturedAlbumInfo albumClicked={albumClicked} />
              ) : (
                <React.Fragment>
                  <div className="featured-album-row-1">
                    <FeaturedAlbums
                      setAlbumClicked={setAlbumClicked}
                      setClicked={setClicked}
                    />
                  </div>
                  <div className="new-music-row-2" id={theme}>
                    <NewMusic />
                  </div>
                </React.Fragment>
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

export default Explore;
