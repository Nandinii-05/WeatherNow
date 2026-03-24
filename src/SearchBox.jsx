import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';

export default function SearchBox({updateInfo}){
    let [city,setCity] = useState("");
    let [error,setError] = useState(false);
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_Key = import.meta.env.VITE_API_KEY;


    let getWeatherInfo = async () => {
        try{
        setError(false);
        let response = await fetch(
         `${API_URL}?q=${city.trim()}&appid=${API_Key}&units=metric`
        );
        if (!response.ok) {
            setError(true);
            return null;
        }

        let jsonResponse = await response.json();
        console.log("API RESPONSE:", jsonResponse);
        console.log("PROD KEY:", import.meta.env.VITE_API_KEY);
        if (!jsonResponse.main || !jsonResponse.weather) {
            setError(true);
            return;
        }
        console.log(jsonResponse);
        let result = {
            city: city,
            temp: jsonResponse.main.temp,
            tempMin: jsonResponse.main.temp_min,
            tempMax: jsonResponse.main.temp_max,
            humidity: jsonResponse.main.humidity,
            feels_like: jsonResponse.main.feels_like,
            weather: jsonResponse.weather[0].description,
        };
        console.log(result);
        setError(false);
        return result;
        } catch(err){
            setError(true);
        }
    }

    

let handleChange = (event) => {
    setCity(event.target.value);
}

let handleSubmit =  async (event) => {
    try{
    event.preventDefault();
    setError(false);
    console.log(city);
    let newInfo = await getWeatherInfo();
    if (newInfo) {
        updateInfo(newInfo);
    }
    setCity("");
    }catch(err){
        setError(true);
    }
}

    return (
        <div className='SearchBox'>
            <form action="" onSubmit={handleSubmit}>
            <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleChange}/>
            <br /> <br />
            <Button variant="contained"  type='Submit' >Search</Button>
            {error && <p style={{color: "red"}}>No Such place exists</p>}
            </form>
        </div>
    )
}