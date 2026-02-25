function WeatherCard({ data }) {
  return (
    <div className="weather-card">
      <h2>{data.name}, {data.sys.country}</h2>
      <img
        src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
        alt="weather icon"
      />
      <h3>{data.main.temp}°C</h3>
      <p>{data.weather[0].description}</p>

      <div className="details">
        <p>Humidity: {data.main.humidity}%</p>
        <p>Wind Speed: {data.wind.speed} m/s</p>
        <p>Pressure: {data.main.pressure} hPa</p>
      </div>
    </div>
  );
}

export default WeatherCard;