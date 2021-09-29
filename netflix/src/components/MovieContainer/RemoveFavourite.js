import React from 'react';
import styles from './MovieContainer.module.css';
function RemoveFavourite() {
    return (
        <div className={styles.favourite}>
            <span>Remove from favourites</span>
        </div>
    )
}

export default RemoveFavourite;