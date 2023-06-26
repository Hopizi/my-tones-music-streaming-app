import React from "react";
import { createContext, useEffect, useState } from "react";
import { CurrentSong } from "../components";
import { db } from "../config/firebase";
import { doc, getDoc } from "firebase/firestore";
import {Pause, Play} from "../assets/now-playing-icons";


export const  CurrentSongContext = createContext(null)

export const CurrentSongContextProvider = ({children}) => {

    const [playingSong, setPlayingSong] = useState()
    const[isPlaying, setIsPlaying] = useState(false);
    const [audio, setAudio] = useState();


    function playSong(songURL) {
        const newAudio = new Audio(songURL)
        newAudio.play();
        setAudio(newAudio);
        setIsPlaying(true)
    }

    function pausePlay() {
        console.log("Function Fired")
        if (audio) {
            if(!audio.paused) {
                audio.pause();
                setIsPlaying(false)
                return;
            }
            audio.play();
            setIsPlaying(true)
            return;
        }
    }

    async function getClickedSong(song, collection, id) {
          const targetId = song;

          let foundMatch = false
          let songLink 

          try {
          const docRef = doc(db, collection, id);
          const docSnapShot = await getDoc(docRef);

          if (docSnapShot.exists()) {
            const docData = docSnapShot.data();
            const dataArray = Object.values(docData);
            dataArray.forEach((data) => {
                if(data.id === targetId) {
                    console.log(data.preview);
                    songLink = data.preview;
                    foundMatch = true;
                    setPlayingSong(data)
                }
                if (!foundMatch) {
                    console.log("Not Found")
                }
            })
            playSong(songLink);
          } else {
            console.log("document does not exixts");
          }
        } catch (error) {
          console.log(error);
        }
        }

    async function playAlbumSong(song, collection, id) {
        const targetId = song;
        let foundMatch = false;
        let songLink; 

        try {
          const docRef = doc(db, collection, id);
          const docSnapShot = await getDoc(docRef);

          if (docSnapShot.exists()) {
            const docData = docSnapShot.data();
            const dataArray = Object.values(docData);
              for (let i = 0; i < dataArray.length; i++) {
                const data = dataArray[i];
                data.forEach((data) => {
                  if (data.id === targetId) {
                    console.log(data.preview);
                    songLink = data.preview;
                    foundMatch = true;
                    setPlayingSong(data);
                  }
                })
              }
              if (!foundMatch) {
                console.log("Not Found");
              }
            playSong(songLink);
          } else {
            console.log("document does not exixts");
          }
        } catch (error) {
          console.log(error);
        }
    }

    async function playFeaturedAlbumSong(song, collection, id) {
        const targetId = song;
        let foundMatch = false;
        let songLink; 

        try {
          const docRef = doc(db, collection, id);
          const docSnapShot = await getDoc(docRef);

          if (docSnapShot.exists()) {
            const docData = docSnapShot.data();
            const dataArray = Object.values(docData);
              for (let i = 0; i < dataArray.length; i++) {
                const data = dataArray[i].tracks.data;
                data.forEach((data) => {
                  if (data.id === targetId) {
                    console.log(data.preview);
                    songLink = data.preview;
                    foundMatch = true;
                    setPlayingSong(data);
                  }
                })
              }
              if (!foundMatch) {
                console.log("Not Found");
              }
            playSong(songLink);
          } else {
            console.log("document does not exixts");
          }
        } catch (error) {
          console.log(error);
        }
    }

    const playTopSong = async (song) => {

        const targetId = song;

        let foundMatch = false;
        let songLink; 

        try {
              const docRef = doc(db, "music", "tracks");
              const docSnapShot = await getDoc(docRef);

         if (docSnapShot.exists()) {
                const docData = docSnapShot.data();
                const dataArray = docData.data;
                dataArray.forEach((data) => {
                  if (data.id === targetId) {
                    console.log(data.preview);
                    songLink = data.preview;
                    foundMatch = true;
                    setPlayingSong(data);
                  }
                  if (!foundMatch) {
                    console.log("Not Found");
                  }
                });
                playSong(songLink);
              } else {
                console.log("document does not exixts");
              }
            } catch (error) {
              console.log(error);
            }
          };

    const currentSong = {
        getClickedSong,
        playingSong,
        isPlaying,
        pausePlay,
        playTopSong,
        playAlbumSong,
        playFeaturedAlbumSong
    }

    return (
      <CurrentSongContext.Provider value={currentSong}>
        {children}
      </CurrentSongContext.Provider>
    );
}