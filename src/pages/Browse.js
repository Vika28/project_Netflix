import React, {useState, useEffect} from 'react';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import MovieContainer from '../components/MovieContainer/MovieContainer';
import Profiles from "../components/Profiles/Profiles";
import Logo from "../components/Header/Logo";
import styles from './pages.module.css';

function Browse() {

    const [userName, setUserName] = useState('');
    const [userUID, setUserUID] = useState('');

    useEffect(() => {
        const auth = getAuth();

        onAuthStateChanged(auth, user => {
            if (user) {
                setUserName(user.displayName);
                setUserUID(user.uid);
            }
        });
    },[]);

    return (
        <div>
            <div className={styles.browseHeader}>
                <Logo />
                <Profiles
                    userName={userName}
                />
            </div>
            <MovieContainer
                userUID={userUID}
            />
        </div>
    )
}

export default Browse;