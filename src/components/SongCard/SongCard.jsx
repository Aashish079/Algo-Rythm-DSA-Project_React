import React from "react";
import PropTypes from "prop-types";
import { song_dll } from "../Player/AudioData";
import "./SongCard.scss";

const SongCard = ({ song,currentSong, setCurrentSong, currentSong_dll,setCurrentSong_dll, libraryStatus, setLibraryStatus }) => {
  const selectSongHandler = () => {
    console.log(currentSong_dll);
    window.current_song_ptr = song_dll.search(song.title);
    setCurrentSong_dll(window.current_song_ptr);
    setLibraryStatus(!libraryStatus);
  };
;

  return (
    <div
      className={`library-song ${song.title == currentSong_dll.data.title ? "selected" : ""}`}
      onClick={selectSongHandler}
    >
      <img src={song.cover} alt={song.title} width="80" height='80' />
      <div className="song-description">
        <h3>{song.title}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

SongCard.propTypes = {
  song: PropTypes.object,
  setActiveSong: PropTypes.func,
  libraryStatus: PropTypes.bool,
  setLibraryStatus: PropTypes.func,
};

export default SongCard;
