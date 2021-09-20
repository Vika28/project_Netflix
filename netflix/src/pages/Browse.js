import React, {useContext, useState, useEffect} from 'react';
import MovieContainer from './../components/MovieContainer/MovieContainer';
import requests from "./../requests";
import Profiles from "../components/Profiles/Profiles";
import { FirebaseContext } from "../context/firebase";
import { getAuth } from "firebase/auth";
import Logo from "../components/Header/Logo";

function Browse() {
    // const { firebase } = useContext()

    const [profile, setProfile] = useState({});
    const [loading, setLoading] = useState(true);
    const { firebase } = useContext(FirebaseContext);

    const auth = getAuth();
    const user = auth.currentUser;
        const displayName = user.displayName;
        const email = user.email;
        const photoURL = user.photoURL;
        const emailVerified = user.emailVerified;

    console.log('displayName', displayName);
    console.log('email', email);
    console.log('photoURL', photoURL);
    console.log('emailVerified', emailVerified);

    // console.log('currentuser name', getAuth().currentUser.displayName);
    const userName = getAuth().currentUser || 'petya';

    // useEffect(() => {
    //     setTimeout(() => {
    //         setLoading(false);
    //     }, 3000);
    // }, [profile.displayName])

    return (
        <div>
            <Logo />
            <Profiles
                userName={displayName}
                setProfile={setProfile}

            />
            <MovieContainer
                fetchURL={requests.fetchNetflixAll}
            />
            <MovieContainer
                fetchURL={requests.fetchNetflixPage1}
                page="Page1"
            />
            <MovieContainer
                fetchURL={requests.fetchNetflixPage2}
                page="Page2"
            />
            <MovieContainer
                fetchURL={requests.fetchNetflixPage3}
                page="Page3"
            />

        </div>
    )
}

export default Browse;