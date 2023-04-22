import React from 'react';


const ToggleWatch = ({movie, toggleWatchedList, watched}) => {

    const watchButton = ()=> {
        return movie.watched ? 'watched' : 'not watched';
    }
     
    const toggleWatchInMovie = () => {
        movie.watched = !movie.watched;
        console.log(movie.watched)
    }
    return ( 
        <form onSubmit={(event)=>{
            toggleWatchedList(event, movie.title, movie.watched);
        }}>
            <button type="submit" onClick={()=>toggleWatchInMovie()}>{watchButton()}</button>
        </form>
    );

}

export default ToggleWatch;