import React, { useState } from "react";
import axios from "axios";
import WeatherTemperature from "./weatherTemperature";
import WeatherForecast from "./weatherforecast";

export default function Search(props) {
  let [city, setCity] = useState("Paris");
  let [weatherData, setWeatherData] = useState({ ready: false });

  function changeHTML(response) {
    response.preventDefault();

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=667d9f573c8af4c33457be5d561a9148&units=metric`;
    axios.get(url).then((response) => {
      let { temp, humidity } = response.data.main;
      let { description } = response.data.weather[0];
      let { speed } = response.data.wind;
      let date = new Date(response.data.dt * 1000).toDateString();
      let city = response.data.name;
      let time = new Date(response.data.dt * 1000).toLocaleTimeString();
      let coordinates = response.data.coord;
      let longitude = response.data.coord.lon;
      let latitude = response.data.coord.lat;

      console.log(response.data.coord);
      console.log(response.data.coord.lon);
      console.log(response.data.coord.lat);

      let iconUrl = `https://openweathermap.org/img/wn/${response.data.weather[0].icon}.png`;
      setWeatherData({
        ready: true,
        city,
        temp,
        humidity,
        description,
        speed,
        iconUrl,
        date,
        time,
        coordinates,
        longitude,
        latitude,
      });
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
      {weatherData.ready && (
        <div>
          <div className="h6">
            <ul>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind Speed: {Math.round(weatherData.speed)} m/s</li>
              <li>Description: {weatherData.description}</li>
              <li>Temperature: {Math.round(weatherData.temp)} °C</li>
              <li>{weatherData.date}</li>
            </ul>
          </div>
          <h4 className="mainCity">
            <div id="city">
              {weatherData.city}
              <img className="icon" src={weatherData.iconUrl} alt="" />
            </div>
            <WeatherTemperature celsius={Math.round(weatherData.temp)} />

            <div>
              <small id="time">{weatherData.time}</small>
            </div>
          </h4>

          <WeatherForecast coordinates={weatherData.coordinates} />
        </div>
      )}
    </div>
  );
}
