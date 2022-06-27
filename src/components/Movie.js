import React from 'react'
import { useEffect, useState } from 'react';
import MCard from './MCard';

import SearchIcon from "../Assests/search.webp";

const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=7532cc5a'

const movie1 = 
    {
        "Title": "Superman Returns",
        "Year": "2006",
        "imdbID": "tt0348150",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNzY2ZDQ2MTctYzlhOC00MWJhLTgxMmItMDgzNDQwMDdhOWI2XkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg"
    }
const Movie = () => {

    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState(' ');

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search);
    }

    useEffect(()=> {
        searchMovies('Superman')
    }, []);
    return(
        <div className='app'>
            <h1>MovieHub</h1>
            <div className="search">
                <input 
                placeholder='Search for movies'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                />
                <img 
                src={SearchIcon}
                alt="search"
                onClick={() => searchMovies(searchTerm)}
                />
            </div>
                {
                    movies?.length >0 
                    ?(
                        <div className='container'>
                        {movies.map((movie) => (
                          <MCard movie={movie} />  
                        ))}
                     </div>
                    ) : (
                        <div className='empty'>
                            <h2>No movies found</h2>
                            </div>
                    )
                    
                }

           
        </div>
    )
}
export default Movie;
// export default App;
// export default function Movie() {
//   return (
//     <div></div>
//   )
// }
