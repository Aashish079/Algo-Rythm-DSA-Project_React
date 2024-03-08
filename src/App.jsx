import Player from "./Player/Player";
import "./Player/player.scss";
import { useRef, useState, useEffect } from "react";
import { song_dll } from "./Player/AudioData.js";
import { BsArrowsExpandVertical } from "react-icons/bs";

const App = () => {
  const [songs, setSongs] = useState(song_dll);
  const [isplaying, setisplaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(window.current_song_ptr);

  const audioElem = useRef();

  useEffect(() => {songs
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
