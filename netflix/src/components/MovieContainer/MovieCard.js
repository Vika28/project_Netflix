import React, {useState} from "react";
import {collection, doc, getDoc, getDocs, updateDoc} from "firebase/firestore";
import styles from './MovieContainer.module.css';
import { db } from './../../lib/firebase.prod';


function MovieCard({ movie, favouriteComponent, handleFavouritesClick, likedMovies, storeLikeMovie }) {
    const FavouriteComponent = favouriteComponent;
    let startCounter = (movie.weight);

    const likedActiveClass = likedMovies.some(item => item.id === movie.id ) ? styles.activeLike : '';
    const counter = likedMovies.some(item => item.id === movie.id ) ? (startCounter + 1) : startCounter;

    return (
        <div className={styles.movieCard}>
            <a href={movie.url} className={styles.movieLink}>
                {movie.image ?
                     <img src={movie.image.medium} alt={movie.name}/> :
                    <img src='https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=338&ext=jpg&ga=GA1.2.1656857203.1631318400' className={styles.noImg} alt={movie.name}/>
                }
                <h4>{movie.name}</h4>
            </a>
            <p>Language: {movie.language}</p>
            <span
                className={`${styles.likesAmount} ${likedActiveClass}`}
                onClick={()=>{
                    storeLikeMovie(movie);
                }}
            >&#10084; {counter}</span>
            <div onClick={() => handleFavouritesClick(movie)}>
                <FavouriteComponent />
            </div>
        </div>
    )
}

export default MovieCard;