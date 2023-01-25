
import React, { useState } from 'react';
import axios from "axios";
import './pagecss.css';
  
const Hyst = () => {


  const [info, setinfo] = useState({})
  
  const [date , setdate] = useState("") 
  
  const url='http://localhost:8080/'+date

  const search = (event) => {
    //this is the part that takes your input in the text box and spits it into the api to get a return
    if (event.key === 'Enter'){
      axios.get(url).then((response) => {
       setinfo(response.data)
        console.log(response.data)
        
      })
      setdate('')
    }


  } 






  return (

    <div>
      <title>Past weather</title>
      
      <h1>Input a date to find historic weather data in boston</h1>
      
     
      <div className="search">
        <input
        //this is the text box you enter
        value={date}
        onChange={event => setdate(event.target.value)}
        onKeyPress={search}
        placeholder='Enter m-d-yy'
        type="text"/>

      </div>
      
      
      {info.Temperature ? <h1>Temperature: {info.AverageTempF}°F</h1> : null}
      {info.WindMPH ? <h1>Wind speed: {info.WindMPH} MPH</h1> : null}
      {info.Visability ? <h1>Visability: {info.Visability} M</h1> : null}
      {info.PrecipititationIN ? <h1>Precipititation: {info.PrecipititationIN} in</h1> : null}

      


    </div>
    
    
  );
};
  
export default Hyst;