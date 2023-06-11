import React, { useEffect, useState } from "react";
import "./styles/Artists.css";
import {
  ArtistsCard,
  ArtistsAlbumCard,
  AlbumsCard,
  Sidebar,
  Navbar,
  Top100Weekly,
  NowPlaying,
} from "../components";
import { Shuffle } from "../assets/main-display-icons";
import { Play } from "../assets/now-playing-icons";
import {artists} from "../api/Artists"
import {
  theWeeknd,
  taylorSwift,
  mileyCirus,
  maroon5,
  drake,
  arianaGrande,
  lilDurk,
  edSheeran,
  nickiMinaj,
  cardiB,
  badBunny,
  burnaBoy,
  wizkid,
  davido,
  rema,
  iceSpice,
  rihana,
  asake,
  selenaGomez,
} from "../api/ArtistsSongs";

function Artists() {

    const [artistsCard, setArtistCard] = useState()
    const [artistInfo, setArtistInfo] = useState()
    const [selectedArtist, setSelectedArtist] = useState()
    const [artistSongs, setArtistSongs] = useState()
    const [actualArtist, setActualArtist] = useState()

    useEffect(() => {
        setArtistCard(artists)
    }, [])

    const selectArtist = (id) => {
        setSelectedArtist(id);
    }

    useEffect(() => {
        const info = selectedInfo()
        if (info) {
            const { object, artist } = info;
            setArtistSongs(object)
            setActualArtist(artist)
            console.log(artist)
        }
    }, [selectedArtist])

    const selectedInfo = () => {
        switch(selectedArtist) {
            case 4050205:
                return {
                    object: theWeeknd,
                    artist: artists[0]
                };
            case 384236:
                return {
                    object: edSheeran,
                    artist: artists[1]
                };
            case 12246:
                return {
                    object: taylorSwift,
                    artist: artists[2]
                }
            case 12436:
                return {
                    object: mileyCirus,
                    artist: artists[3]
                }
            case 564:
                return {
                    object: rihana,
                    artist: artists[4]
                }
            case 1562681:
                return {
                    object: arianaGrande,
                    artist: artists[5]
                }
            case 246791:
                return {
                    object: drake,
                    artist: artists[6]
                }
            case 102426952:
                return {
                    object: iceSpice,
                    artist: artists[7]
                }
            case 10583405:
                return {
                    object: badBunny,
                    artist: artists[8]
                }
            case 3977201:
                return {
                    object: lilDurk,
                    artist: artists[9]
                }
            case 125372:
                return {
                    object: davido,
                    artist: artists[10]
                }
            case 3933641:
                return {
                    object: wizkid, 
                    artist: artists[11]
                }
            case 5259966:
                return {
                    object: rema,
                    artist: artists[12]
                }
            case 51305922:
                return {
                    object: asake,
                    artist: artists[13]
                }
            case 4338602:
                return {
                    object: burnaBoy,
                    artist: artists[14]
                }
            case 292185:
                return {
                    object: selenaGomez,
                    artist: artists[15]
                }
            case 1188:
                return {
                    object: maroon5,
                    artist: artists[16]
                }
            case 9064930:
                return {
                    object: cardiB,
                    artist: artists[17]
                }
            case 382937:
                return {
                    object: nickiMinaj, 
                    artist: artists[18]
                }
            default:
                return null
        }
    }

  return (
    <div className="home-page-main-container">
      <div className="sidebar-container">
        <Sidebar />
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
              <div className="artists-display-container">
                <div className="main-artists-display-contianer">
                  {
                    artistsCard && 
                    artistsCard.map((artist, idx) => {
                        return (<ArtistsCard 
                        artistCover={artist.picture_big}
                        artistName={artist.name}
                        id={artist.id}
                        onClick={() => selectArtist(artist.id)}
                        />)
                    })
                  }
                </div>
                <div className="main-artists-info-display">
                  <div className="main-artists-info-header">
                    <div className="main-artists-info-header-text">
                      <p>{actualArtist?.name}</p>
                    </div>
                    <div className="main-artists-info-play-shuffle">
                      <span>
                        <Play className="play-main-artists" />
                        Play
                      </span>
                      <span>
                        <Shuffle className="shuffle-main-artists" />
                        Shuffle
                      </span>
                    </div>
                  </div>
                  <div className="artists-album-card-main">
                    {
                        artistSongs&&
                        artistSongs.map((song, idx) => {
                            return(<ArtistsAlbumCard 
                            songTitle={song.title}
                            songCover={song.album.cover_big}
                            songArtist={song.artist.name}
                            />)
                        })
                    }
                  </div>
                  <div className="see-more-artist-info">
                    <p>See More by {actualArtist?.name}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="main-page-col-2">
            <div className="top-100-main">
              <Top100Weekly />
            </div>
            <div className="now-playing-main-container">
              <NowPlaying />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Artists;
