import React from 'react';
// import movies from '../data/movieData.js'
import MovieList from './MovieList.jsx'
import Search from './Search.jsx'
import AddMovie from './AddMovie.jsx'
import _ from 'underscore';
// import MovieListEntry from './MovieListEntry.jsx'
//console.log(movies)

 

const {useState} = React;


const App = ({movies}) => {
  // movies.map((movie) => {
  //   movie = _.extend(movie, {watched: false})
  // });
  // console.log(parseSend.readAll);
  // var movies;
  //  parseSend.readAll().then((data)=>{
  //       movies= [...JSON.stringify(data)];
  //       console.log('inside promise', movies);
  //     }).catch((err)=>{
  //       console.error(err);
  //     });
  //     console.log(movies);
  movies.map((movie) => {
      movie = _.extend(movie, {watched: false})
  });
  console.log(movies);
  var [movieList, setMovieList] = useState(movies);
  var [selectedMovie, setSelectedMovie] = useState('');
  var [watched, setWatched] = useState(false);

  // var watchedMovieList= [];
  var [watchedMovieList, setWatchedMovieList] = useState([]);


  // console.log(movieList)
  const searchHandler = (event) => {
    let movieTitle = event.target.value;
    setSelectedMovie(movieTitle);
  }
  const toggleWatch = (change) => {
    setWatched(change);
  }
  const toggleWatchedList= (event, newMovieTitle, newMovieWatched) =>{
    event.preventDefault();
    var newMovieList = []
    movieList.forEach((movie)=>{
      if(movie.title != newMovieTitle) {
        newMovieList.push(movie)
      } else{
        newMovieList.push({title: newMovieTitle, watched: newMovieWatched})
      }
    })
    setMovieList(newMovieList);
    //setMovieList(movieList);
  } 

  return (
  <div>
    <h1 id="list"> Movie List</h1>
    <div className='AddMovie'>
        <AddMovie setMovieList={setMovieList} movieList={movieList} />
    </div>
    <div className='Search'>
      <Search searchHandler={(event) => {searchHandler(event)}}/>
    </div>
    <div className='Watched'>
    <button onClick={()=> toggleWatch(false)}>Not Watched</button> <button onClick={()=> toggleWatch(true)}>Watched</button> 
      <div className='MovieList'>
        <MovieList movies = {movieList} toggleWatchedList={toggleWatchedList} selectedMovie={selectedMovie} watched={watched}/>
      </div>
    </div>
  </div>);
};


//<Search searchHandler={(event) => {searchHandler(event)} }/>
export default App;