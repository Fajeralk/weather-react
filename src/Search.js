import React, { useState } from "react";
import axios from "axios";

export default function Weather() {
  const [city, setCity] = useState(null);
  const [updated, setUpdated] = useState(false);
  const [weather, setWeather] = useState({});

  function showWeather(response) {
    setUpdated(true);
    setWeather({
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }
  function handleSearch(event) {
    event.preventDefault();
    let unit = "metric";
    let apiKey = "3845bbf755c7a6b2d8df3dba924feec5";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;
    axios.get(apiUrl).then(showWeather);
  }

  function updateSearch(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSearch}>
      <input type="search" placeholder="Type a city" onChange={updateSearch} />
      <input type="submit" value="Search" />
      <span className="units" id="current-temp">
        <button type="button" className="cels">
          °C
        </button>
        <button type="button" className="fah">
          °F
        </button>
      </span>
    </form>
  );

  if (updated) {
    return (
      <div>
        {form}
        <ul>
          <li>Temperature:{Math.round(weather.temperature)} °C </li>
          <li>Description:{weather.description} </li>
          <li>Humidity:{weather.humidity} % </li>
          <li>Wind:{weather.wind} km/h </li>
          <li>
            <img src={weather.icon} alt={weather.description} />
          </li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
