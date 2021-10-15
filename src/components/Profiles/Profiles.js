import React from 'react';
import { getAuth } from "firebase/auth";
import {Link as ReachRouterLink} from "react-router-dom";
import styles from './Profiles.module.css';

function Profiles({ userName }) {
    function signOut () {
        return getAuth().signOut();
    }

    return (
        <div className={styles.profileRow}>
            <p className={styles.userName}>Name: {userName}</p>
            <ReachRouterLink
                to='/' onClick={signOut}>
                <button className={styles.btnSignOut}>Sign Out</button>
            </ReachRouterLink>
        </div>
    )
}

export default Profiles;