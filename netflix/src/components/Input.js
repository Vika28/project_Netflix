import React from 'react';
import styles from './../pages/pages.module.css'

function Input(props) {
    return (
        <input
            type={props.type}
            placeholder={props.placeholder}
            value={props.value}
            onChange={props.onChange}
            className={styles.input}
        />
    )
}

export default Input;