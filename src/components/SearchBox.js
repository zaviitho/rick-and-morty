import React from 'react';
import {useState} from 'react';
import axios from 'axios';

const SearchBox = ({setLocation}) => {   

    const [search, setSearch]= useState("")
    console.log(search)
    const searchType = ()=>{
        axios
        .get(`https://rickandmortyapi.com/api/location/${search}`)
        .then((response) =>setLocation(response.data))
   
    }
    return (
        <div className="search-box">
            <input 
            type="text" 
            onChange={e=> setSearch(e.target.value) }  
            value={search}
            placeholder="type a location id"
            />
            <button onClick={searchType}>
            Search
            </button>
        </div>
    );
};

export default SearchBox;