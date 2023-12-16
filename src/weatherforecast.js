import React, { useState, useEffect } from "react";
import axios from "axios";
import "./WeatherForecast.css";

export default function WeatherForecast({ lon, lat, img, day }) {
  let [forecast, setForecast] = useState([]);

  useEffect(() => {
    // Fetch weather data
    let apiKey = "667d9f573c8af4c33457be5d561a9148";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    console.log(apiUrl);
    console.log(forecast);

    axios.get(apiUrl).then(handleResponse);
  }, [lon, lat, img]);

  function handleResponse(response) {
    setForecast(response.data.daily);
  }

  return (
    <div className="WeatherForecast">
      {forecast.length > 0 && (
        <div>
          <div>{day}</div>
          <img src={img} />
          <div className="max-temperature">
            {Math.round(forecast[0].temp.max)}°
          </div>
          <div className="min-temperature">
            {Math.round(forecast[0].temp.min)}°
          </div>
        </div>
      )}
    </div>
  );
}
