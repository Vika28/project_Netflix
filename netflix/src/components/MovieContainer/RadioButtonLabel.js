import React from 'react';
import styles from './MovieContainer.module.css';

function RadioButtonLabel(props) {
    return (
        <span className={styles.radioButton}>
            <input id={props.id} type={props.type} onChange={props.onChange} name={props.name} className={styles.radioInput}/>
            <label htmlFor={props.id}>{props.label}</label>
        </span>
    )
}

export default RadioButtonLabel;