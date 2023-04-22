import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import Parse from './parse.js'

//import styles from '../dist/style.css'

//put callback here
Parse.readAll((data)=>{
    var movies = [...JSON.parse(data)]
    ReactDOM.render(<App movies={movies}/>, document.getElementById('app'));
});