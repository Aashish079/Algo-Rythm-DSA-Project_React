import React from "react";
import PropTypes from "prop-types";
import "./SongCard.scss";

const SongCard = ({ song,currentSong, setCurrentSong, libraryStatus, setLibraryStatus }) => {
  const selectSongHandler = () => {
    setCurrentSong(song);
    setLibraryStatus(!libraryStatus);
  };
;

  return (
    <div
      className={`library-song ${song.title == currentSong.title ? "selected" : ""}`}
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
