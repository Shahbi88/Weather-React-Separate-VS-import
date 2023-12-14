import React, { useState } from "react";

export default function WeatherTemperature(props) {
  let [unit, setUnit] = useState("celsius");

  function showFah(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCel(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div>
        <span className="number">{Math.round(props.celsius)}</span>

        <a className="unit" onClick={showCel}>
          °C
        </a>
        <span> | </span>
        <a className="unit" href="/" onClick={showFah}>
          °F
        </a>
      </div>
    );
  } else {
    let fahrenheit = Math.round((props.celsius * 9) / 5 + 32);
    return (
      <div>
        <span className="number">{fahrenheit}</span>
        <a className="unit" onClick={showFah}>
          °F
        </a>
        <span> | </span>
        <a className="unit" href="" onClick={showCel}>
          °C
        </a>
      </div>
    );
  }
}
