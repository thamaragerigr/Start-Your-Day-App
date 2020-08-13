import React, { useState } from "react";

function Weather() {
    const [weatherData, setweatherData] = useState({})
    function getWeather() {
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        fetch(`${proxyurl}https://www.metaweather.com/api/location/44418/`)
        .then(response => response.json())
        .then(data => {
            setweatherData(data.consolidated_weather[0])
        })
    }

    getWeather()
  
    return (
        <div className="block">
            <h1>Weather</h1>
                <span className="block">Humidity: {weatherData.humidity}</span>
                <span className="block">Max temp: {weatherData.max_temp}</span>
                <span className="block">Min temp: {weatherData.min_temp}</span>
                <span className="block">{weatherData.the_temp}</span>
                <span className="block">{weatherData.weather_state_name}</span>
        </div>
    )
}

export default Weather