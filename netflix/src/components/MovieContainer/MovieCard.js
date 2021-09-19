import React from "react";
import {NavLink} from "react-router-dom";
import styles from './MovieContainer.module.css';


function MovieCard(movie) {
    return (
        <div key={movie.id} className={styles.movieCard}>
            {/*<NavLink to={movie.movieURL}><img src={movie.src} alt={movie.name}/></NavLink>*/}
            <a href={movie.movieURL}><img src={movie.src} alt={movie.name}/></a>
            <h4>{movie.name}</h4>
            <p>Language: {movie.language}</p>
        </div>
    )
}

export default MovieCard;