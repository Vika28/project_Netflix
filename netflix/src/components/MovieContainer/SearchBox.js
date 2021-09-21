import React from "react";

function SearchBox(props) {
    return (
        <input
            type="text"
            value={props.value}
            onChange={props.onChange}
        />
    )
}

export default SearchBox;