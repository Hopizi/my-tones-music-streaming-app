import React, { useContext, useState } from "react";
import "./styles/MyMusicCard.css";
import "./styles/AlbumMusicCard.css"
import { Like } from "../assets/navbar-icons";
import { Dots, HeartLike } from "../assets/main-display-icons";
import { ThemeContext } from "../context/DarkMode";

function AlbumMusicCard({
  songArtist,
  songCover,
  songTitle,
  onClick,
  isLiked,
  playSong,
  songCurrentStyle,
  duration,
  number
}) {
  function fmtMSS(s) {
    return (s - (s %= 60)) / 60 + (9 < s ? ":" : ":0") + s;
  }

  const {theme} = useContext(ThemeContext)

  return (
    <div className="my-music-card-main album-card-main" onClick={playSong} id={theme}>
      <div className="inner-my-music-card-main">
        <div className="my-music-cover-title-artist">
            <div className="music-count-div">
                <p>{number}</p>
            </div>
          <div className="my-music-card-title-artist">
            <p style={songCurrentStyle}>{songTitle}</p>
            <p>{songArtist}</p>
          </div>
        </div>
        <div className="my-music-card-time-like-others">
          <p>{fmtMSS(duration)}</p>
          <Like />
          <Dots />
        </div>
      </div>
    </div>
  );
}

export default AlbumMusicCard;
