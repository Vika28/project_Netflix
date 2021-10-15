import React from 'react';
import {Link as ReachRouterLink} from "react-router-dom";
import styles from './Header.module.css';

function Logo() {
    return (
        <div>
            <div className={styles.logo}><ReachRouterLink to='/' className={styles.logoLink}>
                <img className={styles.logoImg} src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" alt=""/>
                </ReachRouterLink></div>
        </div>
    )
}

export default Logo;