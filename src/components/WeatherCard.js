import React from 'react';

function WeatherCard({ weather }) {
  const { name, sys, main, weather: weatherInfo, wind } = weather;

  return (
    <div className="weather-card">
      <div className="weather-header">
        <h2 className="city-name">
          📍 {name}, {sys.country}
        </h2>
        <img
          src={`https://openweathermap.org/img/wn/${weatherInfo[0].icon}@2x.png`}
          alt={weatherInfo[0].description}
          className="weather-icon"
        />
      </div>

      <div className="weather-main">
        <h1 className="temperature">{Math.round(main.temp)}°C</h1>
        <p className="description">{weatherInfo[0].description}</p>
      </div>

      <div className="weather-details">
        <div className="detail-item">
          <span className="detail-icon">🌡️</span>
          <span className="detail-label">Feels Like</span>
          <span className="detail-value">{Math.round(main.feels_like)}°C</span>
        </div>
        <div className="detail-item">
          <span className="detail-icon">💧</span>
          <span className="detail-label">Humidity</span>
          <span className="detail-value">{main.humidity}%</span>
        </div>
        <div className="detail-item">
          <span className="detail-icon">💨</span>
          <span className="detail-label">Wind Speed</span>
          <span className="detail-value">{wind.speed} m/s</span>
        </div>
        <div className="detail-item">
          <span className="detail-icon">🔼</span>
          <span className="detail-label">Max Temp</span>
          <span className="detail-value">{Math.round(main.temp_max)}°C</span>
        </div>
        <div className="detail-item">
          <span className="detail-icon">🔽</span>
          <span className="detail-label">Min Temp</span>
          <span className="detail-value">{Math.round(main.temp_min)}°C</span>
        </div>
        <div className="detail-item">
          <span className="detail-icon">🌅</span>
          <span className="detail-label">Sunrise</span>
          <span className="detail-value">
            {new Date(sys.sunrise * 1000).toLocaleTimeString()}
          </span>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;