import React from "react";
import "./styles.css";

export default function Search() {
  return (
    <div className="search-form">
      <form id="search-form">
        <input
          type="search"
          placeholder="Enter a city.."
          required
          id="search-form-input"
          className="search-form-input"
        />
        <input type="submit" value="Search" className="search-form-button" />
      </form>
      <br />
    </div>
  );
}
