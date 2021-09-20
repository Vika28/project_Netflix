import React from 'react';
import { useState, useEffect } from 'react';
import axios from './../../axios';
import {NavLink, Route} from "react-router-dom";
import { BrowserRouter as Router} from 'react-router-dom';
import MovieCard from "./MovieCard";
import styles from './MovieContainer.module.css';


function MovieContainer({ fetchURL, page }) {
    const [movies, setMovies] = useState([]);
    //a snippet of code which runs based on a specific condition
    useEffect(() => {
        //if [], run once when  rhe row loads, and dont run again
        async function fetchData() {
            const request = await axios.get(fetchURL);
            setMovies(request.data);
            return request;
        }
        fetchData();
    }, [fetchURL]);
    // console.log('movies' , movies);
    return (
        <div>
            <p>{page}</p>
            <div className={styles.movieContainer}>
                {movies.map(movie => {
                    return (
                        <Router>
                            <MovieCard
                                movieURL={movie.url}
                                src={movie.image.medium}
                                name={movie.name}
                                language={movie.language}
                                id={movie.id}
                            />
                        </Router>

                    )
                })}

            </div>

        </div>
    )
}

export default MovieContainer;