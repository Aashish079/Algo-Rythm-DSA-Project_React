import  { useRef } from 'react';
import './player.scss';
import {BsFillPlayCircleFill, BsFillPauseCircleFill, BsFillSkipStartCircleFill, BsFillSkipEndCircleFill} from 'react-icons/bs';

const Player = ({audioElem, isPlaying, setIsPlaying, currentSong, setCurrentSong, songs})=> {

  const clickRef = useRef();

  const PlayPause = ()=>
  {
    setIsPlaying(!isPlaying);

  }


  const checkWidth = (e)=>
  {
    let width = clickRef.current.clientWidth;
    const offset = e.nativeEvent.offsetX;

    const divprogress = offset / width * 100;

    audioElem.current.currentTime = divprogress / 100 * currentSong.length;

  }

  const skipBack = ()=>
  {
    if (window.current_song_ptr.prev !== null) {
      window.current_song_ptr = window.current_song_ptr.prev;
      setCurrentSong(window.current_song_ptr);
    }
    audioElem.current.currentTime = 0;
    
  }


  const skiptoNext = ()=>
  {
    if (window.current_song_ptr.next !== null) {
      console.log(window.current_song_ptr.next);
      window.current_song_ptr = window.current_song_ptr.next;
      setCurrentSong(window.current_song_ptr);
    }

    audioElem.current.currentTime = 0;
  }

  return (
    <div className='player_container'>
      <div className='cover'>
        <img src={currentSong.data.cover} alt={currentSong.title}/>
      </div>
      <div className="title">
        <p>{currentSong.data.title}</p>
      </div>
      <div className="navigation">
        <div className="navigation_wrapper" onClick={checkWidth} ref={clickRef}>
          <div className="seek_bar" style={{width: `${currentSong.progress+"%"}`}}></div>
        </div>
      </div>
      <div className="controls">
        <BsFillSkipStartCircleFill className='btn_action' onClick={skipBack}/>
        {isPlaying ? <BsFillPauseCircleFill className='btn_action pp' onClick={PlayPause}/> : <BsFillPlayCircleFill className='btn_action pp' onClick={PlayPause}/>}
        <BsFillSkipEndCircleFill className='btn_action' onClick={skiptoNext}/>        
      </div>
    </div>
  
  )
}

export default Player

import PropTypes from 'prop-types';



Player.propTypes = {
  audioElem: PropTypes.object, // or other appropriate PropType
  isPlaying: PropTypes.bool,
  setIsPlaying: PropTypes.func,
  setCurrentSong: PropTypes.func,
};