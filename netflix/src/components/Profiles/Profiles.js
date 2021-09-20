import React from 'react';
import styles from './Profiles.module.css';
import {Link as ReachRouterLink} from "react-router-dom";
import { getAuth } from "firebase/auth";

function Profiles({ userName }) {
    function signOut () {
        return getAuth().signOut()
    }
    return (
        <div>
            <h2>Profile</h2>
            <p>{userName}</p>
            <ReachRouterLink
                to='/' onClick={signOut}>
                signout
            </ReachRouterLink>
        </div>
    )
}

export default Profiles;