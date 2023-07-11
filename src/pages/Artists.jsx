import React, { useEffect, useState, useContext } from "react";
import "./styles/Artists.css";
import {
  ArtistsCard,
  ArtistsAlbumCard,
  AlbumsCard,
  Sidebar,
  Navbar,
  Top100Weekly,
  NowPlaying,
  MusicPlayer
} from "../components";
import { Shuffle } from "../assets/main-display-icons";
import { Play } from "../assets/now-playing-icons";
import {artists} from "../api/Artists"
import {doc, getDoc, setDoc} from "firebase/firestore"
import { db, storage } from "../config/firebase";
import { CurrentSongContext } from "../context/CurrentSong";
import {motion} from "framer-motion"
import { ThemeContext } from "../context/DarkMode";

function Artists() {

  const { getClickedSong } = useContext(CurrentSongContext);
  const { theme } = useContext(ThemeContext);
  const { playAlbumSong, playArtistsSong, playPlaylist } =
    useContext(CurrentSongContext);

    const [artistsCard, setArtistCard] = useState()
    const [artistInfo, setArtistInfo] = useState()
    const [selectedArtist, setSelectedArtist] = useState()
    const [artistSongs, setArtistSongs] = useState()
    const [actualArtist, setActualArtist] = useState()
    const [isArtistClicked, setIsArtistClicked] = useState(false);
    const [playlists, setPlaylist] = useState();

    const selectArtist = (id) => {
        setSelectedArtist(id);
    }

    useEffect(() => {
      const fetchData = async () => {
        try {
          const docRef = doc(db, "artist", "artists");
          const docRef1 = doc(db, "artist", "artistsSongs");

          const docSnapShot = await getDoc(docRef);
          const docSnapShot1 = await getDoc(docRef1);

          if (docSnapShot.exists() && docSnapShot1.exists()) {
            const docData = docSnapShot.data();
            const docData1 = docSnapShot1.data()

            const dataArray = Object.values(docData);
            const dataArray1 = Object.values(docData1);

            setArtistCard(dataArray);
            setArtistInfo(dataArray1);

          } else {
            console.log("document does not exixts");
          }
        } catch (error) {
          console.log(error);
        }
      };

      fetchData();
    }, []);

    useEffect(() => {
        const info = selectedInfo()
        if (info) {
            const { object, artist } = info;
            setArtistSongs(object)
            setActualArtist(artist)
        }
    }, [selectedArtist])



    const selectedInfo = () => {
        switch(selectedArtist) {
            case 4050205:
                return {
                    object: artistInfo[0],
                    artist: artists[0]
                };
            case 384236:
                return {
                    object: artistInfo[1],
                    artist: artists[1]
                };
            case 12246:
                return {
                    object: artistInfo[2],
                    artist: artists[2]
                }
            case 12436:
                return {
                    object: artistInfo[3],
                    artist: artists[3]
                }
            case 564:
                return {
                    object: artistInfo[4],
                    artist: artists[4]
                }
            case 1562681:
                return {
                    object: artistInfo[5],
                    artist: artists[5]
                }
            case 246791:
                return {
                    object: artistInfo[6],
                    artist: artists[6]
                }
            case 102426952:
                return {
                    object: artistInfo[7],
                    artist: artists[7]
                }
            case 10583405:
                return {
                    object: artistInfo[8],
                    artist: artists[8]
                }
            case 3977201:
                return {
                    object: artistInfo[9],
                    artist: artists[9]
                }
            case 125372:
                return {
                    object: artistInfo[10],
                    artist: artists[10]
                }
            case 3933641:
                return {
                    object: artistInfo[11], 
                    artist: artists[11]
                }
            case 5259966:
                return {
                    object: artistInfo[12],
                    artist: artists[12]
                }
            case 51305922:
                return {
                    object: artistInfo[13],
                    artist: artists[13]
                }
            case 4338602:
                return {
                    object: artistInfo[14],
                    artist: artists[14]
                }
            case 292185:
                return {
                    object: artistInfo[15],
                    artist: artists[15]
                }
            case 1188:
                return {
                    object: artistInfo[16],
                    artist: artists[16]
                }
            case 9064930:
                return {
                    object: artistInfo[17],
                    artist: artists[17]
                }
            case 382937:
                return {
                    object: artistInfo[18], 
                    artist: artists[18]
                }
            default:
                return null
        }
    }

    useEffect(() => {
      let songsInfo = [];

      artistSongs?.forEach((song) => {
        songsInfo.push({
          preview: song.preview,
          cover_big: song.album.cover_big,
          title: song.title,
          artist: song.artist.name,
          id: song.id,
        });
      })
      setPlaylist(songsInfo);
    }, [artistSongs])

  return (
    <div className="home-page-main-container" id={theme}>
      <div className="sidebar-container">
        <Sidebar currentLink="Artists" />
      </div>
      <div className="col-2-main">
        <div className="user-navbar">
          <Navbar />
        </div>
        <div className="music-space-main">
          <div className="main-page-display">
            <div className="artists-main-container">
              <div className="artists-main-header-section">
                <h1>Artists</h1>
              </div>
              <div className="artists-display-container" id={theme}>
                <div className="main-artists-display-contianer">
                  {artistsCard &&
                    artistsCard.map((artist, idx) => {
                      return (
                        <ArtistsCard
                          key={idx}
                          artistCover={artist.picture_big}
                          artistName={artist.name}
                          id={artist.id}
                          onClick={() => {
                            selectArtist(artist.id);
                            setIsArtistClicked(true);
                          }}
                          currentArtist={
                            actualArtist?.id === artist.id && theme === "light"
                              ? { backgroundColor: "#f0f0f5" }
                              : {}
                          }
                        />
                      );
                    })}
                </div>
                <div className="main-artists-info-display" id={theme}>
                  <div
                    className="overlay-albums"
                    style={isArtistClicked ? { display: "none" } : {}}
                    id={theme}
                  ></div>
                  <div className="main-artists-info-header" id={theme}>
                    <div className="main-artists-info-header-text">
                      <p>{actualArtist?.name}</p>
                    </div>
                    <div className="main-artists-info-play-shuffle">
                      <span
                        onClick={() => {
                          playPlaylist(playlists, false);
                        }}
                      >
                        <Play className="play-main-artists" />
                        Play
                      </span>
                      <span
                        onClick={() => {
                          playPlaylist(playlists, true);
                        }}
                      >
                        <Shuffle className="shuffle-main-artists" />
                        Shuffle
                      </span>
                    </div>
                  </div>
                  <div className="artists-album-card-main">
                    {artistSongs &&
                      artistSongs.map((song, idx) => {
                        return (
                          <ArtistsAlbumCard
                            key={idx}
                            songTitle={song.title}
                            songCover={song.album.cover_big}
                            songArtist={song.artist.name}
                            playSong={() =>
                              playArtistsSong(song.id, "artist", "artistsSongs")
                            }
                          />
                        );
                      })}
                  </div>
                  <div className="see-more-artist-info">
                    <p>See More by {actualArtist?.name}</p>
                  </div>
                </div>
              </div>
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

export default Artists;
