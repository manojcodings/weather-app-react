import React from 'react';

function ForecastCard({ forecast }) {
  // Har din ka ek forecast lenge (har 24 ghante ka)
  const dailyForecast = forecast.list.filter((item) =>
    item.dt_txt.includes('12:00:00')
  );

  return (
    <div className="forecast-container">
      <h3 className="forecast-title">📅 5-Day Forecast</h3>
      <div className="forecast-grid">
        {dailyForecast.map((item, index) => (
          <div key={index} className="forecast-item">
            <p className="forecast-day">
              {new Date(item.dt_txt).toLocaleDateString('en-US', {
                weekday: 'short',
                month: 'short',
                day: 'numeric',
              })}
            </p>
            <img
              src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
              alt={item.weather[0].description}
              className="forecast-icon"
            />
            <p className="forecast-temp">{Math.round(item.main.temp)}°C</p>
            <p className="forecast-desc">{item.weather[0].description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ForecastCard;