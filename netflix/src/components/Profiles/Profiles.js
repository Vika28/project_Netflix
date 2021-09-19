import React from 'react';
import styles from './Profiles.module.css';

function Profiles({ user }) {
    return (
        <div>
            <h2>Profile</h2>
            <p>{user}</p>
        </div>
    )
}

export default Profiles;