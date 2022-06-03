import React, { useState, useEffect } from "react";
import Landingpage from "./components/Landingpage";
import DateBuilder from "./components/DateBuilder";
import "./style/Home.css";
import NewsList from "./components/NewsList";

const App = () => {
  const [weather, setWeather] = useState({});
  const [error, setError] = useState(null);
  const [query, setQuery] = useState("Tangerang");

  useEffect(() => {
    const api = {
      key: "f7c462b8bfa8a407d1f8c3f2bc464fe4",
      base: "https://api.openweathermap.org/data/2.5/"
    };

    const getWeather = async () => {
      try {
        const URL = `${api.base}weather?q=${query}&units=metric&APPID=${api.key}`;
        const response = await fetch(URL, {
          mode: "cors"
        });
        const data = await response.json();

        setWeather(data);
      } catch (error) {
        setError(error);
      }
    };
    getWeather();
  }, [query]);

  const getWeatherClass = (weatherInfo) => {
    let weatherClass = "app";
    let weatherDesc = "";

    if (
      typeof weatherInfo !== "undefined" &&
      typeof weatherInfo.weather !== "undefined"
    ) {
      weatherDesc = weather.weather[0].main;

      switch (weatherDesc) {
        case "Rain":
          weatherClass = "app rain";
          break;
        case "Clouds":
          weatherClass = "app";
          break;
        case "Clear":
          weatherClass = "app clear";
          break;
        case "Thunderstorm":
          weatherClass = "app storm";
          break;
        default:
          weatherClass = "app";
      }
    }

    return weatherClass;
  };

  return (
    <div className={getWeatherClass(weather)}>
      {typeof weather.main !== "undefined" ? (
        <div>
          <div className="location-box">
            <div className="location">
              <h1>7 Days Student </h1>
              {weather.name}, {weather.sys.country}
            </div>
          </div>
          <div className="weather-box">
            <div className="temperature">
              {Math.round(weather.main.temp)}°c {weather.weather[0].main}
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      <Landingpage />
    </div>
  );
};
export default App;
