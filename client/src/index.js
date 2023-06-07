import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import Parse from './parse.js'
import movies from './data/movieData.js'

//import styles from '../dist/style.css'

//put callback here
// Parse.readAll((data)=>{
//     var movies = [...JSON.parse(data)]
//     ReactDOM.render(<App movies={movies}/>, document.getElementById('app'));
// });

ReactDOM.render(<App movies={movies}/>, document.getElementById('app'));