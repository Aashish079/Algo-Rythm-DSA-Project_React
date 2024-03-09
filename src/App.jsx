import Player from "./Player/Player";
import "./Player/player.scss";
import { useRef, useState, useEffect } from "react";
import RedBlackTree from "./algorithms/red_black_tree.js";
import { song_dll } from "./Player/AudioData.js";
import { BsArrowsExpandVertical } from "react-icons/bs";

// apil change start

const App = () => {
  //Inserting songsdata into redblack tree
  const songsTree = new RedBlackTree();

  songsdata.forEach((item) => {
    songsTree.add(item.title, item.url);
  });

  const [songs, setSongs] = useState(song_dll);

  const [isplaying, setisplaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(window.current_song_ptr);

  const audioElem = useRef();

  useEffect(() => {
    songs;
    if (isplaying) {
      audioElem.current.play();
    } else {
      audioElem.current.pause();
    }
  }, [isplaying, currentSong]);

  const onPlaying = () => {
    const duration = audioElem.current.duration;
    const ct = audioElem.current.currentTime;

    setCurrentSong({
      ...currentSong,
      progress: (ct / duration) * 100,
      length: duration,
    });
  };

  //Returns new sorted list of songs object
  const sortByTitle = (rb_tree) => {
    const emptyList = [];
    const sortedList = rb_tree.inOrderTraversal(rb_tree.root, emptyList);
    return sortedList;
  };

  return (
    <div className="center-content">
      <audio
        src={currentSong.data.url}
        ref={audioElem}
        onTimeUpdate={onPlaying}
      />
      <Player
        songs={songs}
        setSongs={setSongs}
        isPlaying={isplaying}
        setIsPlaying={setisplaying}
        audioElem={audioElem}
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
      />
    </div>
  );
};

export default App;
