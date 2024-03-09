import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { Drawer } from "vaul";
import "./Library.scss";
import SongCard from "../SongCard/SongCard.jsx";

const Library = ({
  songs,
  setSongs,
  libraryStatus,
  setLibraryStatus,
  currentSong,
  setCurrentSong,
  currentSong_dll,
  setCurrentSong_dll,
}) => {
  return (
    <div className={`${libraryStatus ? "library-active" : "library"}`}>
      <div className="library-header">
        <h2>Songs</h2>
        <button>Sort</button>
      </div>

      <div>
        {songs &&
          songs.map((song, index) => (
            <SongCard
              song={song}
              currentSong={currentSong}
              setCurrentSong={setCurrentSong}
              currentSong_dll={currentSong_dll}
              setCurrentSong_dll={setCurrentSong_dll}
              libraryStatus={libraryStatus}
              setLibraryStatus={setLibraryStatus}
              key={index}
            />
          ))}
      </div>
    </div>
  );
};

Library.propTypes = {
  songs: PropTypes.array,
  setSongs: PropTypes.func,
  libraryStatus: PropTypes.bool,
  setLibraryStatus: PropTypes.func,
  setIsInFavorites: PropTypes.func,
  favoriteSongs: PropTypes.array,
};

export default Library;
