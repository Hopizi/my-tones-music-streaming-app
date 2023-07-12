import React, { useEffect, useState, useContext } from "react";
import "./styles/MusicPlayer.css";
import {
  Shuffle,
  Previous,
  Pause,
  Play,
  Next,
  Repeat,
} from "../assets/now-playing-icons";
import { Like } from "../assets/navbar-icons";
import { HeartLike } from "../assets/main-display-icons";
import { CurrentSongContext } from "../context/CurrentSong";
import { ThemeContext } from "../context/DarkMode";
import { AuthContext } from "../context/AuthenticationContext";
import { FavouriteSongsContext } from "../context/FavouriteSongs";
import { motion } from "framer-motion";

function MusicPlayer() {

    const { playingSong, setIsPlaying } = useContext(CurrentSongContext);
    const { isPlaying } = useContext(CurrentSongContext);
    const { pausePlay } = useContext(CurrentSongContext);
    const { songDuration } = useContext(CurrentSongContext);
    const { currentSongTime } = useContext(CurrentSongContext);
    const {theme} = useContext(ThemeContext)
    const {currentUser} = useContext(AuthContext)
    const { favouritesSongs, addFavourite } = useContext(FavouriteSongsContext);

    const [currentSong, setCurrentSong] = useState()
    const [duration, setDuration] = useState()
    const [currentSongId, setCurrentSongId] = useState()

    useEffect(() => {
        setCurrentSong(playingSong)
    }, [playingSong])

    useEffect(() => {
      if (playingSong) {
        setCurrentSongId(playingSong.id);
      }
    }, [playingSong])
    useEffect(() => {
      const time = currentSongTime/songDuration * 100;
      setDuration(time)
      // if (time === 100) {
      //   setIsPlaying(false)
      // } 
    }, [currentSongTime])

  return (
    <motion.div className="music-player-main-container">
      <div className="inner-music-player" id={theme}>
        <div className="inner-1">
          <div className="inner-music-player-col-1">
            <div
              className="current-song-image"
              style={!currentSong ? { visibility: "hidden" } : {}}
            >
              <img
                src={
                  currentSong?.album?.cover_big ||
                  currentSong?.cover_big ||
                  currentSong?.cover
                }
              />
            </div>
            <div className="current-music-title">
              <h2>{currentSong?.title}</h2>
              <p>{currentSong?.artist.name || currentSong?.artist}</p>
            </div>
          </div>
          <div className="inner-music-player-col-2">
            <div className="current-music-controls">
              {currentSong ? (
                favouritesSongs.includes(currentSongId) ? (
                  <HeartLike />
                ) : (
                  <Like />
                )
              ) : (
                "" ||
                (favouritesSongs.some((data) => currentSongId === data.songId) ? (
                  <HeartLike />
                ) : (
                  <Like />
                ))
              )}
              <Previous className="next-previous" />
              <div className="pause-play-container">
                {isPlaying ? (
                  <Pause className="pause-play" onClick={() => pausePlay()} />
                ) : (
                  <Play
                    className="pause-play play"
                    onClick={() => pausePlay()}
                  />
                )}
              </div>
              <Next className="next-previous" />
              <Repeat />
            </div>
          </div>
        </div>
        <div className="song-progress-container">
          {currentSongTime && (
            <div
              className="song-progress"
              style={{ width: `${duration}%` }}
            ></div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default MusicPlayer