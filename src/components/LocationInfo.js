import React from 'react';
// import {useState,useEffect} from 'react';
// import axios from 'axios';
// import SearchBox from './SearchBox';
import Residents from './Residents';
const LocationInfo = ({residents}) => {
    

    console.log(residents)
    return (
        <div className="location-info">
            {residents?.map((res) =>(
                /* <div key={res}>{res}</div> */
                <Residents url={res} key={res}/>
            ) )}
        </div>
    );
};

export default LocationInfo;