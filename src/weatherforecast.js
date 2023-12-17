import React, { useState, useEffect } from "react";
import axios from "axios";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  const [forecastData, setForecastData] = useState(null);

  useEffect(() => {
    if (props.lon && props.lat) {
      let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.lat}&lon=${props.lon}&exclude=current,minutely,hourly&appid=667d9f573c8af4c33457be5d561a9148&units=metric`;
      axios.get(url).then((response) => {
        setForecastData(response.data);
      });
    }
  }, [props.lon, props.lat]);

  function formatDay(timestamp) {
    let date = new Date(timestamp * 1000);
    let day = date.toLocaleDateString(undefined, { weekday: "short" });
    return day;
  }

  if (forecastData) {
    return (
      <div className="weather-forecast">
        <div className="forecast-row">
          {forecastData.daily.slice(1, 6).map((dayForecast) => (
            <div className="col" key={dayForecast.dt}>
              <div className="forecast-day">{formatDay(dayForecast.dt)}</div>
              <img
                src={`https://openweathermap.org/img/wn/${dayForecast.weather[0].icon}.png`}
                alt={dayForecast.weather[0].description}
                className="forecast-icon"
              />
              <div className="forecast-temperature">
                <span className="max-temp">
                  {Math.round(dayForecast.temp.max)}
                </span>{" "}
                /{" "}
                <span className="min-temp">
                  {Math.round(dayForecast.temp.min)}°C
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
