import React, { useEffect, useState, useContext } from "react";
import "./styles/MusicPlayer.css";
import { MusicPic } from "../assets/top100-icons";
import {
  Shuffle,
  Previous,
  Pause,
  Play,
  Next,
  Repeat,
} from "../assets/now-playing-icons";
import { Like } from "../assets/navbar-icons";
import { CurrentSongContext } from "../context/CurrentSong";
import { ThemeContext } from "../context/DarkMode";

function MusicPlayer() {

    const { playingSong } = useContext(CurrentSongContext);
    const { isPlaying } = useContext(CurrentSongContext);
    const { pausePlay } = useContext(CurrentSongContext);
    const {theme} = useContext(ThemeContext)

    const [currentSong, setCurrentSong] = useState()

    useEffect(() => {
        setCurrentSong(playingSong)
    }, [playingSong])

  return (
    <div className="music-player-main-container">
      <div className="inner-music-player" id={theme}>
        <div className="inner-1">
          <div className="inner-music-player-col-1">
            <div className="current-song-image">
              <img
                src={currentSong?.album?.cover_big || currentSong?.cover_big}
              />
            </div>
            <div className="current-music-title">
              <h2>{currentSong?.title}</h2>
              <p>{currentSong?.artist.name}</p>
            </div>
          </div>
          <div className="inner-music-player-col-2">
            <div className="current-music-controls">
              <Like />
              <Previous className="next-previous" />
              <div className="pause-play-container">
                {isPlaying ? (
                  <Pause className="pause-play" onClick={() => pausePlay()} />
                ) : (
                  <Play className="pause-play" onClick={() => pausePlay()} />
                )}
              </div>
              <Next className="next-previous" />
              <Repeat />
            </div>
          </div>
        </div>
        <div className="song-progress" style={{ width: "70%" }}></div>
      </div>
    </div>
  );
}

export default MusicPlayer