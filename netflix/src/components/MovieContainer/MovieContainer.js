import React, {useCallback} from 'react';
import { useState, useEffect } from 'react';
import { debounce } from 'throttle-debounce';
import axios from './../../axios';
import { BrowserRouter as Router} from 'react-router-dom';
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

    const searchData = useCallback(debounce(1000,  async (value) => {
        console.log('debounce');
        let {data} = await axios.get(`${requests.fetchSearch}${value}`);

        if(data) {
            let searchMoviesData = data.map(el => el.show);
            setSearchMovies(searchMoviesData);
        }
    }), []);
    useEffect(async () => {
            let request = await axios.get(requests.fetchNetflixAll);
            setAllMovies(request.data);
    }, []);

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
        // saveToLocalStorage(newFavouriteList);
    }

    const removeFavouriteMovie = (movie) => {
        const newFavouriteList = favourites.filter((favourite) => favourite.id !== movie.id);
        setFavourites(newFavouriteList);
        // saveToLocalStorage(newFavouriteList);
    }
    // useEffect(() => {
    //     const movieFavourites = JSON.parse(localStorage.getItem('react-movie-app-favourites'));
    //     setFavourites(movieFavourites);
    // },[]);



    const movies = searchValue ? searchMovies : allMovies;
    return (
        <div>
            <SearchBox
                searchValue={searchValue}
                onChange={onChange}
            />
            <div className={styles.movieContainer}>
                {movies.map(movie => {
                    return (
                        <div>
                            <MovieCard
                                key={movie.id}
                                movie={movie}
                                favouriteComponent={AddFavourite}
                                handleFavouritesClick={addFavouriteMovie}
                            />
                        </div>
                    )
                })}
            </div>
            <div>
                <p>Favourites</p>
                {favourites ? favourites.map(movie => {
                    return (
                        <div>
                            <MovieCard
                                key={movie.id}
                                movie={movie}
                                favouriteComponent={RemoveFavourite}
                                handleFavouritesClick={removeFavouriteMovie}
                            />
                        </div>
                    )
                }) :
                    <p>No favourites</p>
                }
            </div>
        </div>
    )
}

export default MovieContainer;