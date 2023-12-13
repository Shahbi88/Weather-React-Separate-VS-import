import React from "react";
import "./styles.css";

export default function MainCity() {
  return (
    <h4 className="mainCity">
      <div id="city">London</div>
      <div>
        <small id="time">Time</small>
        <div class="temp">
          <span class="units" id="temperature">
            ☁️°
          </span>
          <small>
            <a id="fah" href="#"></a>{" "}
          </small>
        </div>
      </div>
    </h4>
  );
}
