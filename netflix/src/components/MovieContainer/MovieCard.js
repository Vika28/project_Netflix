import React from "react";
import styles from './MovieContainer.module.css';


function MovieCard({ movie, favouriteComponent, handleFavouritesClick, likedMovies, storeLikeMovie }) {
    const FavouriteComponent = favouriteComponent;
    let startCounter = (movie.weight);

    const likedActiveClass = likedMovies.some(item => item.id === movie.id ) ? styles.activeLike : '';
    const counter = likedMovies.some(item => item.id === movie.id ) ? (startCounter + 1) : startCounter;
    const movieRating = movie.rating.average ? movie.rating.average : 0;
    return (
        <div className={styles.movieCard}>
            <a href={movie.url} className={styles.movieLink}>
                {movie.image ?
                     <img src={movie.image.medium} alt={movie.name}/> :
                    <img src='https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=338&ext=jpg&ga=GA1.2.1656857203.1631318400' className={styles.noImg} alt={movie.name}/>
                }
                <h4 className={styles.movieTitle}>{movie.name}</h4>

            </a>
            <p className={styles.genresText}>
                {movie.genres.join('/')}
            </p>
            <p className={styles.textDescription}>Language: {movie.language}</p>
            <p className={styles.textDescription}>Schedule: {movie.schedule.days.join(' ')} {movie.schedule.time}</p>
            <div className={styles.iconsBox}>
                <div className={styles.ratingBoxWrapper}><span className={styles.ratingIcon}>&#9733;</span> <span>{movieRating}</span></div>
                <div
                    className={styles.likeBoxWrapper}
                    onClick={()=>{
                        storeLikeMovie(movie);
                    }}
                >
                    <span className={`${styles.likesAmount} ${likedActiveClass} ${styles.counter}`}>&#10084;</span> <p className={styles.likeText}>{counter}</p>
                </div>
            </div>


            <div onClick={() => handleFavouritesClick(movie)}
            className={styles.favouriteWrapper}
            >
                <FavouriteComponent />
            </div>
        </div>
    )
}

export default MovieCard;