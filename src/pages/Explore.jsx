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
import { Play, Shuffle } from "../assets/now-playing-icons";
import {GoBack} from "../assets/main-display-icons";

function Explore() {

  const { theme } = useContext(ThemeContext);

  const [clicked, setClicked] = useState(false);
  const [albumClicked, setAlbumClicked] = useState();
  const [playlists, setPlaylist] = useState();

  // useEffect(() => {
  //   let songsInfo = [];
  //   albumClicked?.forEach((song) => {
  //     songsInfo.push({
  //       preview: song.preview,
  //       cover_big: song.album.cover_big,
  //       title: song.title,
  //       artist: song.artist.name,
  //       id: song.id,
  //     });
  //   });
  //   setPlaylist(songsInfo);
  // }, [albumClicked])

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
                  <h1>Explore</h1>
                </div>
                {clicked && (
                  <div className="albums-header-col-2">
                    <span
                      onClick={() => {
                        playPlaylist(playlists, false);
                      }}
                    >
                      <Play className="play-albums" />
                      Play
                    </span>
                    <span
                      onClick={() => {
                        playPlaylist(playlists, true);
                      }}
                    >
                      <Shuffle className="shuffle-albums" />
                      Shuffle
                    </span>
                  </div>
                )}
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default Explore;
