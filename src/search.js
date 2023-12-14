import React, { useState } from "react";
import axios from "axios";
import WeatherTemperature from "./weatherTemperature";

export default function Search(props) {
  let [city, setCity] = useState("City..");
  let [weatherData, setWeatherData] = useState({});

  function changeHTML(event) {
    event.preventDefault();

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=667d9f573c8af4c33457be5d561a9148&units=metric`;
    axios.get(url).then((response) => {
      let { temp, humidity } = response.data.main;
      let { description } = response.data.weather[0];
      let { speed } = response.data.wind;
      let iconUrl = `https://openweathermap.org/img/wn/${response.data.weather[0].icon}.png`;

      setWeatherData({ temp, humidity, description, speed, iconUrl });
    });
  }

  function inputData(event) {
    setCity(event.target.value);
  }

  return (
    <div className="search-form">
      <form onSubmit={changeHTML} id="search-form">
        <input
          type="search"
          onChange={inputData}
          placeholder="Enter a city.."
          required
          id="search-form-input"
          className="search-form-input"
        />
        <input type="submit" value="Search" className="search-form-button" />
      </form>
      {city && (
        <div className="row">
          <div className="h6 col">
            <ul>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind Speed: {Math.round(weatherData.speed)} m/s</li>
              <li>Description: {weatherData.description}</li>
              <li>Temperature: {Math.round(weatherData.temp)}</li>
            </ul>
          </div>
          <h4 className="mainCity col">
            <div id="city">
              {city} <img src={weatherData.iconUrl} alt="" />
            </div>
            <WeatherTemperature celsius={Math.round(weatherData.temp)} />
            <div>
              <small id="time">Time</small>
            </div>
          </h4>
        </div>
      )}
    </div>
  );
}
