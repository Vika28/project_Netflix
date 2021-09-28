import React from 'react';

function RadioButtonLabel(props) {
    return (
        <span>
            <input id={props.id} type={props.type} onChange={props.onChange} name={props.name}/>
            <label htmlFor={props.id}>{props.label}</label>
        </span>
    )
}

export default RadioButtonLabel;