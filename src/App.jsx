import Player from "./Player/Player";
import "./Player/player.scss";
import { songsdata } from "./Player/AudioData.js";
import { useRef, useState, useEffect } from "react";
import RedBlackTree from "./algorithms/red_black_tree.js";

const App = () => {
  //Inserting songsdata into redblack tree
  const songsTree = new RedBlackTree();

  songsdata.forEach((item) => {
    songsTree.add(item.title, item.url);
  });

  const [songs, setSongs] = useState(songsdata);
  const [isplaying, setisplaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(songsdata[1]);

  const audioElem = useRef();

  useEffect(() => {
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
      <audio src={currentSong.url} ref={audioElem} onTimeUpdate={onPlaying} />
      <Player
        songs={songs}
        setSongs={setSongs}
        isplaying={isplaying}
        setisplaying={setisplaying}
        audioElem={audioElem}
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
      />
    </div>
  );
};

export default App;
