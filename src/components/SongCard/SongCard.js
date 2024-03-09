import React from "react";
import PropTypes from "prop-types";
import "./SongCard.scss";

const SongCard = ({ song, setActiveSong, libraryStatus, setLibraryStatus }) => {
  const selectSongHandler = () => {
    setActiveSong(song.id);
    setLibraryStatus(!libraryStatus);
  };

  return (
    <div
      className={`library-song ${song.active ? "selected" : ""}`}
      onClick={selectSongHandler}
    >
      <img src={song.cover} alt={song.name} />
      <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

LibrarySong.propTypes = {
  song: PropTypes.object,
  setActiveSong: PropTypes.func,
  libraryStatus: PropTypes.bool,
  setLibraryStatus: PropTypes.func,
};

export default SongCard;
