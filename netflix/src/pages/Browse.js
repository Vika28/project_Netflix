import React, {useContext, useState, useEffect} from 'react';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import MovieContainer from './../components/MovieContainer/MovieContainer';
import Profiles from "../components/Profiles/Profiles";
import Logo from "../components/Header/Logo";
import styles from './pages.module.css';

function Browse(props) {

    const [profile, setProfile] = useState({});
    const [userName, setUserName] = useState('');

    useEffect(() => {
        const auth = getAuth();

        onAuthStateChanged(auth, user => {
            if (user) {
                setUserName(user.displayName);
            }
        });
    },[]);
    return (
        <div>
            <div className={styles.browseHeader}>
                <Logo />
                <Profiles
                    userName={userName}
                    setProfile={setProfile}
                />
            </div>
            <MovieContainer />
        </div>
    )
}

export default Browse;