import React, {useCallback} from 'react';
import { useState, useEffect } from 'react';
import { debounce } from 'throttle-debounce';
import axios from './../../axios';
import MovieCard from "./MovieCard";
import styles from './MovieContainer.module.css';
import SearchBox from "./SearchBox";
import requests from "../../requests";
import AddFavourite from "./AddFavourite";
import RemoveFavourite from "./RemoveFavourite";


function MovieContainer() {
    const [allMovies, setAllMovies] = useState([]);
    const [searchMovies, setSearchMovies] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [favourites, setFavourites] = useState([]);
    let [likedMovies, setLikedMovies] = useState([]);


    const searchData = useCallback(debounce(1000,  async (value) => {
        let {data} = await axios.get(`${requests.fetchSearch}${value}`);

        if(data) {
            let searchMoviesData = data.map(el => el.show);
            setSearchMovies(searchMoviesData);
        }
    }), []);


    const onChange = (event) => {
        setSearchValue(event.target.value);
        searchData(event.target.value);
    }
    const saveToLocalStorage = (items) => {
        localStorage.setItem('react-movie-app-favourites', JSON.stringify(items));
    }

    const addFavouriteMovie = (movie) => {
        const newFavouriteList = [...favourites, movie];
        setFavourites(newFavouriteList);
        saveToLocalStorage(newFavouriteList);
    }

    const removeFavouriteMovie = (movie) => {
        const newFavouriteList = favourites.filter((favourite) => favourite.id !== movie.id);
        setFavourites(newFavouriteList);
        saveToLocalStorage(newFavouriteList);
    }


    const movies = searchValue ? searchMovies : allMovies;

    useEffect(async () => {
        let request = await axios.get(requests.fetchNetflixAll);
        console.log('request.data', request.data);
        setAllMovies(request.data);
    }, []);

    useEffect(() => {
        const movieFavourites = JSON.parse(localStorage.getItem('react-movie-app-favourites'));
        if (movieFavourites) {
            setFavourites(movieFavourites);
        }
    },[]);
    return (
        <div className={styles.movieContainerPage}>
            <SearchBox
                searchValue={searchValue}
                onChange={onChange}
            />
            <h2>All Movies</h2>
            <div className={styles.movieContainer}>
                {movies.map(movie => {
                    return (
                        <div>
                            <MovieCard
                                key={movie.id}
                                movie={movie}
                                favouriteComponent={AddFavourite}
                                handleFavouritesClick={addFavouriteMovie}
                                likedMovies={likedMovies}
                                setLikedMovies={setLikedMovies}
                            />
                        </div>
                    )
                })}
            </div>
            <div>
                <h2>Favourites</h2>
                <div className={styles.movieContainer}>
                    {favourites.length > 0 ? favourites.map(movie => {
                    {/*{favourites.map(movie => {*/}
                            return (
                                <div>
                                    <MovieCard
                                        key={movie.id}
                                        movie={movie}
                                        favouriteComponent={RemoveFavourite}
                                        handleFavouritesClick={removeFavouriteMovie}
                                        likedMovies={likedMovies}
                                        setLikedMovies={setLikedMovies}

                                    />
                                </div>
                            )
                        }) :
                        <p>No favourites</p>
                    }
                </div>

            </div>
        </div>
    )
}

export default MovieContainer;