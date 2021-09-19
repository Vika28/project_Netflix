import React from 'react';
import styles from './Header.module.css';
import Logo from "./Logo";
import {Link as ReachRouterLink} from "react-router-dom";

function Header() {
    return (
        <div className={styles.headerMain}>
            <Logo />

                    <ReachRouterLink to='/signin' className={styles.signLink}><button className={styles.btnRegister}>Sign in</button></ReachRouterLink>

        </div>
    )
}

export default Header;