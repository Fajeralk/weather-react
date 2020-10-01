import React from "react";
import "./styles.css";
import "./App.css";
// eslint-disable-next-line
import Search from "./Search";
// eslint-disable-next-line
import Day from "./Day";
// eslint-disable-next-line
import Forecast from "./Forecast";
// eslint-disable-next-line
import Temperature from "./Temperature";

export default function App() {
  return (
    <div className="container">
      <nav className="navbar navbar-light bg-light">
        <form className="form-inline" id="search-form">
          <h1>
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search City"
              aria-label="search"
              id="query"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              GO!
            </button>
            <span className="units" id="current-temp">
              <button
                type="button"
                className="btn btn-outline-info"
                id="cels"
                // eslint-disable-next-line
                className="active"
              >
                °C
              </button>
              <button type="button" className="btn btn-outline-info" id="fah">
                °F
              </button>
            </span>
          </h1>
        </form>
      </nav>
      <img
        src="https://www.thisiscolossal.com/wp-content/uploads/2010/11/four-seasons.jpg"
        alt="season change"
        className="illustration"
        width="1100"
        height="300"
      />

      <p className="foot">
        <a
          href="https://github.com/Fajeralk/Faje-s-project-plus"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open source code by
        </a>
        Fajer alkhubaizi
      </p>
    </div>
  );
}
