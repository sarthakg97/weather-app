import React from 'react'

function Weather({weather}) {
  return (
    <div className="weather-card">
      <h2>{weather.name}, {weather.sys.country}</h2>
      <p className="temp">{Math.round(weather.main.temp)}°C</p>
      <p className="desc">{weather.weather[0].description}</p>
      <div className="details">
        <div>
          <span>Humidity</span>
          <span>{weather.main.humidity}%</span>
        </div>
        <div>
          <span>Wind</span>
          <span>{weather.wind.speed} km/h</span>
        </div>
        <div>
          <span>Feels Like</span>
          <span>{Math.round(weather.main.feels_like)}°C</span>
        </div>
      </div>
    </div>
  )
}

export default Weather;

