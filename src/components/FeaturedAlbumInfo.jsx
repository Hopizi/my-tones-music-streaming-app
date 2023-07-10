import React, {useContext} from 'react'
import {AlbumMusicCard} from "../components"
import { CurrentSongContext } from '../context/CurrentSong';

function FeaturedAlbumInfo({albumClicked}) {

    const { playFeaturedAlbumSong } = useContext(CurrentSongContext);
    const { playingSong } = useContext(CurrentSongContext);4

    const playingSongsStyles = {
      color: "#4343ef",
    };

  return (
    <div className="clicked-album-info">
      <div className="clicked-albums-info-header">
        <div className="album-cover-section">
          <div className="albums-cover-container">
            <img src={albumClicked?.cover_big} />
          </div>
        </div>
        <div className="album-info-section-1">
          <div className="album-title-section">
            <p>Album</p>
            <h1>{albumClicked?.title}</h1>
          </div>
          <div className="album-info-artist-year-song-count">
            <div className="album-info-artist-cover">
              <img src={albumClicked?.artist.picture_big} />
            </div>
            <p>2023</p>
            <p>{albumClicked.tracks.data.length} Songs</p>
          </div>
        </div>
      </div>
      <div className="album-songs-section-1">
        {albumClicked.tracks.data.map((albumSong, idx) => {
          return (
            <AlbumMusicCard
              key={idx}
              songTitle={albumSong.title}
              songArtist={albumSong.artist.name}
              duration={albumSong.duration}
              number={idx + 1}
              playSong={() =>
                playFeaturedAlbumSong(albumSong.id, "albums", "featuredAlbums")
              }
              songCurrentStyle={
                playingSong?.id === albumSong.id ? playingSongsStyles : {}
              }
            />
          );
        })}
      </div>
    </div>
  );
}

export default FeaturedAlbumInfo