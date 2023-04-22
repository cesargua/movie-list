import React from 'react';

const Search = ({searchHandler}) => {  
    return (
        <form>
            <input onChange={(event) =>{searchHandler(event)}} type="text" class="searchTerm" placeholder="Search Movie Title"></input>
            <button type="submit">Search</button>
        </form>
    )
}

export default Search; 