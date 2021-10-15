import React from "react";
import styles from './MovieContainer.module.css';

function SearchBox(props) {
    return (
        <input
            type="text"
            value={props.value}
            onChange={props.onChange}
            placeholder='Search...'
            className={styles.inputSearch}
        />
    )
}

export default SearchBox;