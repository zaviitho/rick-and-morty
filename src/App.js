import './App.css';
import SearchBox from './components/SearchBox';
import {useState,useEffect} from 'react';
import axios from 'axios';
import LocationInfo from './components/LocationInfo';
function App() {
  const [location,setLocation] =useState({})
    

  useEffect(() =>{
      const random= Math.floor(Math.random()*125)+1
      axios
      .get(`https://rickandmortyapi.com/api/location/${random}`)
      .then((response) =>setLocation(response.data))
  },[])
  
  console.log(location.data)
  return (
    <div className="App">
      <SearchBox setLocation={setLocation}/>
      <div className="info-wrapper">
        <h1>{location.name}</h1>
        <ul className="info-location">
          <li>type: {location.type}</li>
          <li>dimension: {location.dimension}</li>
          <li>population: {location.residents?.length}</li>
        </ul>
      </div>
      <LocationInfo residents={location.residents}/>
    </div>
  );
}

export default App;