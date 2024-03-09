import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { Drawer } from "vaul";
import "./Library.scss";
import SongCard from "../SongCard/SongCard.jsx";
import RedBlackTree from "../../algorithms/red_black_tree.js";
import { song_dll, sorted_song_dll } from "../Player/AudioData.js";

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

  const songTree = new RedBlackTree();
  let cur_ptr = song_dll.head;
   do{
    songTree.add(cur_ptr.data.title, cur_ptr.data);
    cur_ptr = cur_ptr.next;
  }while (cur_ptr != song_dll.head);

  const sortedList = songTree.inOrderTraversal(songTree.root);

  // console.log(sortedList);

  let updateSongs = () => {
    setSongs(sortedList);
    window.current_song_ptr = sorted_song_dll.head;
  };

  return (
    <div className={`${libraryStatus ? "library-active" : "library"}`}>
      <div className="library-header">
        <h2>Songs</h2>
        <button onClick={updateSongs}>Sort</button>
      </div>

      <div>
        {
            songs &&
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
          ))
        }
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
