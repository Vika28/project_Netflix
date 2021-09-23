import React, {useState} from "react";
import styles from './MovieContainer.module.css';

function MovieCard({ movie, favouriteComponent, handleFavouritesClick, likedMovies, setLikedMovies }) {
    const FavouriteComponent = favouriteComponent;
    const [counter, setCounter] = useState(movie.weight);
    const likeMovie = () => {

        if (likedMovies.includes(movie.id)) {
            console.log('text color black');
            console.log('remove this movie from likes');
            likedMovies = likedMovies.filter(item => item !== movie.id);
            setLikedMovies(likedMovies);
            setCounter(counter - 1);



        } else {
            console.log('like, text red');
            setCounter(counter + 1);
            setLikedMovies([...likedMovies, movie.id]);
        }
    }
    // likedMovies.includes(movie.id)}
    const likedActiveClass = likedMovies.includes(movie.id) ? styles.active : '' ;
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
                onClick={likeMovie}
            >{counter}	&#10084;</span>
            <div onClick={() => handleFavouritesClick(movie)}>
                <FavouriteComponent />
            </div>
        </div>
    )
}

export default MovieCard;