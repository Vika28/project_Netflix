import React from 'react';
import {Link as ReachRouterLink} from "react-router-dom";
import styles from './Header.module.css';

function Logo() {
    return (
        <div>
            <div className={styles.logo}><ReachRouterLink to='/' className={styles.logoLink}>NETFLIX</ReachRouterLink></div>
        </div>
    )
}

export default Logo;