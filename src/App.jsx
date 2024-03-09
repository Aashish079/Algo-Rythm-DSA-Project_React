import Player from "./components/Player/Player.jsx";
import Nav from "./components/Nav/Nav.jsx";
import "./App.scss";
import { songsdata } from "./components/Player/AudioData.js";
import { useRef, useState, useEffect } from "react";
import Library from "./components/Library/Library.jsx";

const App = () => {
  const [songs, setSongs] = useState(songsdata);
  const [libraryStatus, setLibraryStatus] = useState(false);
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

  return (
    <div>
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
      <Library
        songs={songs}
        setSongs={setSongs}
        libraryStatus={libraryStatus}
        setLibraryStatus={setLibraryStatus}
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}

      />
      <audio src={currentSong.url} ref={audioElem} onTimeUpdate={onPlaying} />
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
