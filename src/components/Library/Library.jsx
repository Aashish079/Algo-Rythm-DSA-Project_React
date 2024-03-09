import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Drawer } from 'vaul';
import './Library.scss';

const Library = (
    {
        songs,
        setSongs,
        libraryStatus,
        setLibraryStatus,
        // setIsInFavorites,
        favoriteSongs }
) => {
    let color1 = '#fff';
    let color2 = '#fff';
    // songs.map(song => {
    //     if (song.active) {
    //         color1 = song.color[0];
    //         color2 = song.color[1];
    //     }
    // });
    const gradient = {
        backgroundImage: `linear-gradient(to right, ${color1}, ${color2})`
    };
    return (
        <div className={`${libraryStatus?'library-active':'library'}`}>

        </div>
    );
};

Library.propTypes = {
    songs: PropTypes.array,
    setSongs: PropTypes.func,
    libraryStatus: PropTypes.bool,
    setLibraryStatus: PropTypes.func,
    setIsInFavorites: PropTypes.func,
    favoriteSongs: PropTypes.array
};

export default Library;