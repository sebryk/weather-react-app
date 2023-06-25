import { weatherIcons } from '../data/weatherIcons';


function CurrentForecast({ currentForecastData }) {

  const cityName = `${currentForecastData?.name}`;
  const currentTemp = currentForecastData?.main.temp.toFixed();
  const currentWeatherDesc = currentForecastData?.weather[0].description ?? '';
  const capitalizeCurrentWeatherDesc = currentWeatherDesc?.charAt(0).toUpperCase() + currentWeatherDesc?.slice(1)
  const currentWeatherIcon = currentForecastData?.weather[0].icon;
  const iconUrl = weatherIcons[currentWeatherIcon]

  return ( 
    <div className="weather-current">  
      <h2 className="weather-current__city">
        {cityName}
      </h2>
      <h1 className="weather-current__temp">
        {currentTemp}
      </h1>
      <h2 className="weather-current__desc">
        {capitalizeCurrentWeatherDesc}
      </h2>
      <img 
      src={iconUrl} 
      alt={`${currentWeatherDesc} icon`} 
      className="weather-current__icon" 
      />
    </div>
  );
}

export default CurrentForecast;