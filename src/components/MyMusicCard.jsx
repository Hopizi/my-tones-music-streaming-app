import React, { useState, useContext } from "react";
import "./styles/MyMusicCard.css";
import { Like } from "../assets/navbar-icons";
import { Dots, HeartLike } from "../assets/main-display-icons";
import { ThemeContext } from "../context/DarkMode";
import { AuthContext } from "../context/AuthenticationContext";

function MyMusicCard({ songArtist, songCover, songTitle, onClick, IsLiked, playSong, songCurrentStyle, duration }) {

  const { theme } = useContext(ThemeContext);
  const { currentUser } = useContext(AuthContext)

  function fmtMSS(s) {
    return (s - (s %= 60)) / 60 + (9 < s ? ":" : ":0") + s;
  }

  function getTextColor() {
    return theme === "dark" ? {color: "#fff"} : {};
  }

  const textColorStyles = getTextColor();

  

  return (
    <div className="my-music-card-main" onClick={playSong} id={theme}>
      <div className="inner-my-music-card-main">
        <div className="my-music-cover-title-artist">
          <div className="my-music-card-cover">
            <img src={songCover} />
          </div>
          <div className="my-music-card-title-artist">
            <p
              style={songCurrentStyle}
              className={theme === "dark" ? "text-color" : ""}
            >
              {songTitle}
            </p>
            <p style={getTextColor()}>{songArtist}</p>
          </div>
        </div>
        <div className="my-music-card-time-like-others">
          <p>{fmtMSS(duration)}</p>
          { currentUser &&
          <IsLiked
            onClick={(event) => {
              event.stopPropagation();
              onClick();
            }}
          />
          }
          <Dots />
        </div>
      </div>
    </div>
  );
}

export default MyMusicCard;
