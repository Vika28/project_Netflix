import React from 'react';
import styles from './Profiles.module.css';
import {Link as ReachRouterLink} from "react-router-dom";
import { getAuth } from "firebase/auth";
import DropdownFilter from "../DropdownFilter/DropdownFilter";
import requests from "./../../requests";


function Profiles({ userName }) {
    function signOut () {
        // localStorage.setItem('react-movie-app-favourites', '');
        return getAuth().signOut();
    }
    return (
        <div>
            <h2>Profile</h2>
            <p>{userName}</p>
            <ReachRouterLink
                to='/' onClick={signOut}>
                signout
            </ReachRouterLink>
            {/*<DropdownFilter*/}
            {/*    fetchURL={requests.fetchNetflixPage1}*/}
            {/*/>*/}
        </div>
    )
}

export default Profiles;