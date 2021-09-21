import React from "react";
import {NavLink} from "react-router-dom";
import styles from './MovieContainer.module.css';
import AddFavourite from "./AddFavourite";


function MovieCard({ movie, favouriteComponent, handleFavouritesClick }) {
    const FavouriteComponent = favouriteComponent;

    return (
        <div className={styles.movieCard}>
            <a href={movie.url}>
                {movie.image &&
                     <img src={movie.image.medium} alt={movie.name}/>
                }
                <h4>{movie.name}</h4>
            </a>
            <p>Language: {movie.language}</p>
            <div onClick={() => handleFavouritesClick(movie)}>
                <FavouriteComponent />
            </div>
        </div>
    )
}

export default MovieCard;