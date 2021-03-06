import React, { useState } from "react";
import Info from "./Info";
import Forecast from "./Forecast";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherInfo, setWeatherInfo] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherInfo({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityUpdate(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "3845bbf755c7a6b2d8df3dba924feec5";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherInfo.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Search for a new city.."
                className="form-control"
                autoFocus="on"
                onChange={handleCityUpdate}
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="GO!"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <Info data={weatherInfo} />
        <Forecast city={weatherInfo.city} />
      </div>
    );
  } else {
    search();
    return "Searching...";
  }
}
