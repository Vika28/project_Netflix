import React, {useEffect, useState} from 'react';

import axios from "../../axios";

function DropdownFilter({ fetchURL, page }) {
    const [movies, setMovies] = useState([]);
    //a snippet of code which runs based on a specific condition
    useEffect(() => {
        //if [], run once when  rhe row loads, and dont run again
        async function fetchData() {
            const request = await axios.get(fetchURL);
            setMovies(request.data);
            return request;
        }
        fetchData();
    }, [fetchURL]);

    function Cons () {
        // console.log('thisvalue',this.option.value());
        return console.log('dropdown click');
    }

    function getValue(obj){
        console.log('obj vale',obj.value);
    }

    return (
        <div>
            <select name="cars" id="cars">
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
            </select>
        </div>
    )
}

export default DropdownFilter;