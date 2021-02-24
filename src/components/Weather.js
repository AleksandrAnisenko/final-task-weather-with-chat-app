import React, { useState } from "react";
import Chat from "./Chat";

const api = {
  key: "c7616da4b68205c2f3ae73df2c31d177",
  base: "https://api.openweathermap.org/data/2.5/",
};

function Weather() {
  const [city, setCity] = useState("");

  const [weather, setWeather] = useState({});

  const search = (evt) => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${city}&units=metric&appid=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          setCity("");
          console.log(result);
        });
    }
  };

  const format_date = (d) => {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  };

  return (

    <div
    style={{display: "flex", justifyContent: "space-between"}}
      className={
        typeof weather.main != "undefined"
          ? weather.main.temp < 0 
            ? "app cold"
            : weather.main.temp < 20 ? 
            "app middle" 
            : weather.main.temp < 30 ?
            "app warm"
            : "app hot"
          : "app"
      }
    >
      <main>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Search..."
            onChange={(e) => setCity(e.target.value)}
            value={city}
            onKeyPress={search}
          />
        </div>
        {typeof weather.main != "undefined" ? (
          <div>
            <div className="location-box">
              <div className="location">
                {weather.name}, {weather.sys.country}
              </div>
              <div className="date">{format_date(new Date())}</div>
            </div>
            <div className="weather-box">
              <div className="temp">{Math.round(weather.main.temp)}°c</div>
              <div className="weather">{weather.weather[0].main}</div>
            </div>
          </div>
        ) : (
          ""
        )}
      </main>
      <Chat />
    </div>
  );
}

export default Weather;
