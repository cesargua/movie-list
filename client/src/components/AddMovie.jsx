import React, { useState } from 'react';
// import movies from '../data/movieData.js'
import Parse from '../parse.js';


const AddMovie = ({setMovieList, movieList}) => { 
    const [input, setInput] = useState("")
    var newMovieList = [...movieList];
    return (
    <form onSubmit={(event)=>{
        const newEntry = {title: input, watched: false}
        event.preventDefault();
        newMovieList.push(newEntry);
        // console.log(parse.create);
        // parse.create(newEntry);
        Parse.create(newEntry)
        setMovieList(newMovieList);
        setInput("")
    }}>
        <input onChange={(event) =>{
            setInput(event.target.value)
        }} type="text" class="addMovie" placeholder="Add movie" value={input}></input>
        <button type="submit">Submit</button>
    </form>
    )
}

export default AddMovie;