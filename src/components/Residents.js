import React from 'react';
import {useState,useEffect} from 'react';
import axios from 'axios';

const Residents = ({url}) => {
    const [resident, setResident]=useState({})
    console.log(url)
    useEffect(() =>{
        axios.get(url)
        .then((response) =>setResident(response.data))
    },[url])
    console.log(resident)
    return (    
        <div className="residents">

           
            <div className="card-resident">
            <img src={resident.image} alt="" />
            <ul>
                <li>{resident.name}</li>
                <li>{resident.status}</li>
                <li className="li">Origin:</li>
                <li>{resident.origin?.name}</li>
                <li className="li">Episodes where appear:</li>
                <li>{resident.episode?.length}</li>
            </ul>
            </div>
        </div>
        
    );
};

export default Residents;