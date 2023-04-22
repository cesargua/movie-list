import React from 'react';

import movies from '../data/movieData.js'
import ToggleWatch from './ToggleWatch.jsx';

const MovieListEntry = ({movie, toggleWatchedList, watched}) => {
 
    return (
        <div>
            <li>{movie.title}
               <ToggleWatch movie={movie} toggleWatchedList={toggleWatchedList} watched={watched}/>
            </li>
           
        </div>
    );
};

export default MovieListEntry;