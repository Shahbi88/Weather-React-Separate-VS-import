import React, { useState } from "react";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  let [forecast, setForecast] = useState("");
  function handleResponse(response) {
    let longitude = response.data.coord.lon;
    let latitude = response.data.coord.lat;
    let apiKey = "667d9f573c8af4c33457be5d561a9148";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    console.log(response.data.coord);
    console.log(response.data.coord.lat);
    setForecast(response.data.daily);

    return (
      <div className="WeatherForecast">
        <div class="row">
          <div class="col">
            <div className="Day-of-week">Thu</div>
            <div className="Forecast-icon">🌤️</div>
            <div>
              <span className="earlier-temperature">
                {forecast[0].temp.max}19
              </span>
              /10
            </div>
          </div>
        </div>
      </div>
    );
  }
}
