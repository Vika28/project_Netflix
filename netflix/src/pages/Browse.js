import React, {useContext, useState, useEffect} from 'react';
import MovieContainer from './../components/MovieContainer/MovieContainer';
import requests from "./../requests";
import Profiles from "../components/Profiles/Profiles";
import { FirebaseContext } from "../context/firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Logo from "../components/Header/Logo";

function Browse(props) {
    // const { firebase } = useContext()

    const [profile, setProfile] = useState({});
    const [loading, setLoading] = useState(true);
    const { firebase } = useContext(FirebaseContext);
    const [userName, setUserName] = useState('');

    useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, user => {
            setUserName(user.displayName);
        });
    },[]);
    return (
        <div>
            <Logo />
            <Profiles
                userName={userName}
                setProfile={setProfile}
            />
            <MovieContainer />
        </div>
    )
}

export default Browse;