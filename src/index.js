import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import App from "./App";
import Header from "./header";
import Search from "./search";
import MainCity from "./mainCity";
import WeatherInfo from "./weatherInfo";
import Forecast from "./forecast";
import Footer from "./footer";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div className="card-body">
      <Header />
      <Search />
      <MainCity />
      <WeatherInfo />
      <Forecast />
      <Footer />
    </div>
  </StrictMode>
);
