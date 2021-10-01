import React, {useCallback} from 'react';
import { useState, useEffect } from 'react';
import { debounce } from 'throttle-debounce';
import { collection, getDocs, updateDoc, doc } from "firebase/firestore";
import CircleLoader from "react-spinners/CircleLoader";
import axios from './../../axios';
import MovieCard from "./MovieCard";
import styles from './MovieContainer.module.css';
import SearchBox from "./SearchBox";
import requests from "../../requests";
import AddFavourite from "./AddFavourite";
import RemoveFavourite from "./RemoveFavourite";
import RadioButtonLabel from "./RadioButtonLabel";
import { db } from './../../lib/firebase.prod';

function MovieContainer(props) {
    const [allMovies, setAllMovies] = useState([]);
    const [searchMovies, setSearchMovies] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [favourites, setFavourites] = useState([]);
    const [likedMovies, setLikedMovies] = useState([]);
    const [stateRadioButton, setStateRadioButton] = useState(false);
    const [nameRadioButton, setNameRadioButton] = useState('');
    const [loading, setLoading] = useState(true);
    const [loadingAll, setLoadingAll] = useState(true);

    const genresArr = [
        {id: 'drama', label: 'Drama'},
        {id: 'thriller', label: 'Thriller'},
        {id: 'scienceFiction', label: 'Science-Fiction'},
        {id: 'horror', label: 'Horror'},
        {id: 'music', label: 'Music'},
        {id: 'supernatural', label: 'Supernatural'},
        {id: 'reset', label: 'Reset'},
    ];

    let dramaArr = [];
    let thrillerArr = [];
    let scienceFictionArr = [];
    let horrorArr = [];
    let supernaturalArr = [];
    let musicArr = [];
    let movies = [];

    const searchData = useCallback(debounce(1000,  async (value) => {
        let {data} = await axios.get(`${requests.fetchSearch}${value}`);

        if(data) {
            let searchMoviesData = data.map(el => el.show);
            setSearchMovies(searchMoviesData);
        }
    }), []);

    allMovies.forEach((el) => {
        el.genres.forEach ((item) => {
            if(item === 'Drama') {
                dramaArr.push(el);
            } else if (item === 'Science-Fiction') {
                scienceFictionArr.push(el);
            } else if (item === 'Thriller') {
                thrillerArr.push(el);
            } else if (item === 'Horror') {
                horrorArr.push(el);
            } else if (item === 'Supernatural') {
                supernaturalArr.push(el);
            } else if (item === 'Music') {
                musicArr.push(el);
            }
        })
    })

    const onChange = (event) => {
        setSearchValue(event.target.value);
        searchData(event.target.value);
    }

    async function updateInfoFavourites(ref, newMovies) {
        await updateDoc(ref, {
            favouriteMovies: newMovies,
        });
    }

    const addFavouriteMovie = (movie) => {
        if(favourites.some((item) => item.id === movie.id)) {
            return
        }
        const newFavouriteList = [...favourites, movie];
        setFavourites(newFavouriteList);

        getDocs(collection(db, "users"))
            .then((res) => {
                res.forEach((eachDoc) => {
                    if (eachDoc.id === props.userUID) {
                        const ref = doc(db, "users", `${props.userUID}`);
                        updateInfoFavourites(ref, newFavouriteList);
                    }
                });
            })
    }
    async function updateInfoLiked(ref, newMovies) {
        await updateDoc(ref, {
            likedMovies: newMovies,
        });
    }
    const toggleLikeToMovie = (movie) => {
        let newLikedList = [];
        if(likedMovies.some(item => item.id === movie.id)) {
            newLikedList = likedMovies.filter(item => item.id !== movie.id);
        } else {
            newLikedList = [...likedMovies, movie];
        }

        setLikedMovies(newLikedList);
        getDocs(collection(db, "users"))
            .then((res) => {
                res.forEach((eachDoc) => {
                    if (eachDoc.id === props.userUID) {
                        const ref = doc(db, "users", `${props.userUID}`);
                        updateInfoLiked(ref, newLikedList);
                    }
                });
            })

    }

    const removeFavouriteMovie = (movie) => {
        const newFavouriteList = favourites.filter((favourite) => favourite.id !== movie.id);
        setFavourites(newFavouriteList);
        getDocs(collection(db, "users"))
            .then((res) => {
                res.forEach((eachDoc) => {
                    if (eachDoc.id === props.userUID) {
                        const ref = doc(db, "users", `${props.userUID}`);
                        updateInfoFavourites(ref, newFavouriteList);
                    }
                });
            })
    }

    function onChangeInput(event) {
            setStateRadioButton(false);
            setStateRadioButton(event.target.checked);
            setNameRadioButton(event.target.id);
    }

    useEffect(async () => {
        let request = await axios.get(requests.fetchNetflixAll);
        setAllMovies(request.data);
        setLoadingAll(false);
    }, []);


    useEffect(() => {
        if (props.userUID) {
            getDocs(collection(db, "users"))
                .then((res) => {
                    res.forEach((doc1) => {
                        if (doc1.id === props.userUID) {
                            setFavourites(doc1.data().favouriteMovies);
                            setLikedMovies(doc1.data().likedMovies);

                        }
                    });
                    setLoading(false);
                })
        }
    }, [props.userUID]);


    if (searchValue) {
        movies = searchMovies;
    } else if (stateRadioButton  && nameRadioButton === 'drama') {
        movies = dramaArr;
    } else if (stateRadioButton  && nameRadioButton === 'thriller') {
        movies = thrillerArr;
    } else if (stateRadioButton  && nameRadioButton === 'scienceFiction') {
        movies = scienceFictionArr;
    } else if (stateRadioButton && nameRadioButton === 'horror') {
        movies = horrorArr;
    } else if (stateRadioButton && nameRadioButton === 'music') {
        movies = musicArr;
    } else if (stateRadioButton && nameRadioButton === 'supernatural') {
        movies = supernaturalArr;
    } else {
        movies = allMovies;
    }



    return (
        <div className={styles.movieContainerPage}>
            <SearchBox
                searchValue={searchValue}
                onChange={onChange}
            />
            {searchValue ? <h2 className={styles.mainTitle}>Search: {searchValue}</h2> :
                <>
                    <h2 className={styles.mainTitle}>All Movies</h2>
                    <div className={styles.radioButtonWrapper}>
                        {genresArr.map((item) => {
                            return (
                                <RadioButtonLabel
                                    key={item.id}
                                    id={item.id}
                                    type="radio"
                                    name="question"
                                    onChange={onChangeInput}
                                    label={item.label}
                                />
                            )
                        })}
                    </div>
                </>
                }

            <div className={styles.movieContainer}>
                {
                    loadingAll ?
                        <CircleLoader color={"#D73674"} loading={loading} size={30} />
                        :
                        <>
                            {movies.map(movie => {
                                return (
                                    <div
                                        key={movie.id}
                                    >
                                        <MovieCard
                                            movie={movie}
                                            favouriteComponent={AddFavourite}
                                            handleFavouritesClick={addFavouriteMovie}
                                            likedMovies={likedMovies}
                                            setLikedMovies={setLikedMovies}
                                            storeLikeMovie={toggleLikeToMovie}
                                        />
                                    </div>
                                )
                            })}
                        </>
                }



            </div>
            <div>
                {loading ?
                    <CircleLoader color={"#D73674"} loading={loading} size={30} />
                    :
                    <>
                        {favourites.length > 0 ? <>
                                <h2 className={styles.mainTitle}>Favourites</h2>
                                <div className={styles.movieContainer}>
                                    {favourites.map(movie => {
                                        return (
                                            <MovieCard
                                                key={movie.id}
                                                movie={movie}
                                                favouriteComponent={RemoveFavourite}
                                                handleFavouritesClick={removeFavouriteMovie}
                                                likedMovies={likedMovies}
                                                setLikedMovies={setLikedMovies}
                                                storeLikeMovie={toggleLikeToMovie}
                                            />
                                        )
                                    })}
                                </div>
                            </>  :
                            <h2 className={styles.mainTitle}>No favourites</h2>
                        }
                    </>
                }

            </div>

        </div>
    )
}

export default MovieContainer;