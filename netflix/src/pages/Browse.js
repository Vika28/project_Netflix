import React, {useContext, useState} from 'react';
import MovieContainer from './../components/MovieContainer/MovieContainer';
import requests from "./../requests";
import Profiles from "../components/Profiles/Profiles";
import { FirebaseContext } from "../context/firebase";
import { getAuth } from "firebase/auth";

function Browse() {
    // const { firebase } = useContext()
    const [profile, setProfile] = useState({});
    const user = getAuth().currentUser || {};
    console.log(getAuth().currentUser);
    return (
        <div>
            {/*<MovieContainer*/}
            {/*    fetchURL={requests.fetchNetflixAll}*/}
            {/*/>*/}
            {/*<MovieContainer*/}
            {/*    fetchURL={requests.fetchNetflixPage1}*/}
            {/*    page="Page1"*/}
            {/*/>*/}
            {/*<MovieContainer*/}
            {/*    fetchURL={requests.fetchNetflixPage2}*/}
            {/*    page="Page2"*/}
            {/*/>*/}
            {/*<MovieContainer*/}
            {/*    fetchURL={requests.fetchNetflixPage3}*/}
            {/*    page="Page3"*/}
            {/*/>*/}
            <Profiles
                user={user}
                setProfile={setProfile}
            />
        </div>
    )
}

export default Browse;