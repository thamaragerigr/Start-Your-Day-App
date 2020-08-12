import React, { useState } from "react";

function Weather() {
    const [weatherData, setweatherData] = useState()
    function getWeather() {
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        fetch(`${proxyurl}https://www.metaweather.com/api/location/2487956/`)
        .then(response => response.json())
        .then(data => setweatherData(data.consolidated_weather[0].weather_state_name))
    }

    getWeather()
  
    return (
        <div>
            <h1>Weather</h1>
            {weatherData}
        </div>
    )
}

export default Weather