import React, { useState, useEffect } from "react";
import axios from "axios";

export default function WeatherForecast({ lon, lat }) {
  let [forecast, setForecast] = useState([]);

  useEffect(() => {
    // Fetch weather data
    let apiKey = "667d9f573c8af4c33457be5d561a9148";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    console.log(apiUrl);

    axios.get(apiUrl).then(handleResponse);
  }, [lon, lat]);

  function handleResponse(response) {
    setForecast(response.data.daily);
  }

  return (
    <div className="WeatherForecast">
      {forecast.length > 0 && (
        <div>
          <span className="earlier-temperature">
            {Math.round(forecast[0].temp.max)}°
          </span>
          <div className="later-temperature">
            {Math.round(forecast[0].temp.min)}°
          </div>
        </div>
      )}
    </div>
  );
}
