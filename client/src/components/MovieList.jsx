import React from 'react';
import movies from '../data/movieData.js'
import MovieListEntry from './MovieListEntry.jsx'

// const MovieList = ({movies}) => {
//     console.log(movies)
//     return (
//     <ul>
//       <li>{movies[0].title}</li>
//       <li>{movies[1].title}</li>
//       <li>{movies[2].title}</li>
//       <li>{movies[3].title}</li>
//       <li>{movies[4].title}</li>
//     </ul>);
// };

const MovieList = ({movies, toggleWatchedList, selectedMovie, watched}) => {
    console.log('watch state is', watched)
    const filteredMovieList = movies.filter((movie) => {
         console.log(movie)
        if(movie.watched === watched){
            if(selectedMovie === '') return movie;
            else {
                return movie.title.includes(selectedMovie);
            }
        }
    })
    // const toggleWatchInMovie = () => {
    //     movie.watched = !movie.watched;
    //     console.log(movie.watched)
    // }
    
    return (
        <ul>
            {filteredMovieList.map((aMovie)=> 
                <MovieListEntry movie={aMovie} toggleWatchedList={toggleWatchedList} watched={watched}/>)}
        </ul>
    );
};

export default MovieList;