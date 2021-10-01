import React from 'react';
import styles from '../pages/pages.module.css'

function Input(props) {
    return (
        <>
            <input
                type={props.type}
                placeholder={props.placeholder}
                value={props.value}
                onChange={props.onChange}
                className={`${styles.input} ${props.className}`}
            />
            <p className={styles.hint}>{props.hint}</p>
        </>

    )
}

export default Input;