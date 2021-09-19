import React from 'react';
import Header from './../components/Header/Header';
import styles from './pages.module.css';

function Home() {
    return (
        <div className={styles.page}>
            <Header />
        </div>
    )
}

export default Home;