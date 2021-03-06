import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <img
          src="https://www.thisiscolossal.com/wp-content/uploads/2010/11/four-seasons.jpg"
          alt="season change"
          className="illustration"
          width="1000"
          height="280"
        />
        <Weather defaultCity="Portland" />
        <br />

        <footer>
          <a
            href="https://github.com/Fajeralk/weather-react"
            target="_blank"
            rel="noopener noreferrer"
          >
            👁 This project was coded by{" "}
          </a>
          Fajer alkhubaizi 👁
        </footer>
      </div>
    </div>
  );
}
