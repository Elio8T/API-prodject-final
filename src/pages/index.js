
import React, { useState } from 'react';
import axios from "axios";
import './pagecss.css';
  
const Home = () => {


  const [info, setinfo] = useState({})
  
  const [city , setcity] = useState("")
  
  const url='https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=38e40f2ac4335c7b260a4691ad4f4697'
  

  const search = (event) => {
    
    if (event.key === 'Enter'){
      axios.get(url).then((response) => {
       setinfo(response.data)
        console.log(response.data)
        
      })
      setcity('')
    }


  } 






  return (
    

    <div>
      <title>Weather look up</title>
      
      <h1>Input a city to see its current weather</h1>
     
      <div className="search">
        <input
        
        value={city}
        onChange={event => setcity(event.target.value)}
        onKeyPress={search}
        placeholder='Enter city name'
        type="text"/>

      </div>
      
      {info.main ? <h1>Temperature: {info.main.temp - 273}°C</h1> : null}
      {info.wind ? <h1>Wind speed: {info.wind.speed} MPH</h1> : null}


    </div>
    
    
  );
};
  
export default Home;