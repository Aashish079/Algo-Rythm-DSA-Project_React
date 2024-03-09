import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic } from '@fortawesome/free-solid-svg-icons';

import './Nav.scss';
import Library from '../Library/Library';

const Nav = ({ libraryStatus, setLibraryStatus }) => {
    return (
        <nav>
            <h1>AlgoRythm</h1>
            <button onClick={() => setLibraryStatus(!libraryStatus)}>
                Library &nbsp;
                <FontAwesomeIcon icon={faMusic} />
            </button>
            <Library/>
        </nav>
    );
}

Nav.propTypes = {
    libraryStatus: PropTypes.bool,
    setLibraryStatus: PropTypes.func
};

export default Nav;