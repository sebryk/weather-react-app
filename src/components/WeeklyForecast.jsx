import { weatherIcons, weekDay } from '../data/weatherIcons';

function WeeklyForecast({ weeklyForecastData }) {

  const maxTempForecasts = findMaxTempsForecasts(weeklyForecastData?.list);

  function findMaxTempsForecasts(forecastList) {
    const maxTemps = {};
    forecastList?.forEach((forecast) => {
      const date = new Date(forecast.dt * 1000).toDateString();
      if (!maxTemps[date] || forecast.main.temp > maxTemps[date].main.temp) {
        maxTemps[date] = forecast;
      }
    });
    return Object.values(maxTemps);
  }

  function getWeekDay(day) {
    const forecastWeekday = new Date(day * 1000).getDay()
    return weekDay[forecastWeekday]
    
  }
  
  function renderWeeklyForecast() {
    return maxTempForecasts?.filter((el) => {
      const currentDay = new Date().getDay()
      const weeklyForecasrDay = new Date(el.dt * 1000).getDay()
      return weeklyForecasrDay !== currentDay
    })
    .map((day) => (
      <div key={day.dt} className="weather-weekly">
        <div className="weather-weekly__wrap">
          <div className="weather-weekly__day">
            {getWeekDay(day.dt)}
          </div>
          <div className="weather-weekly__forecast">
            <img
              src={weatherIcons[day.weather[0].icon]}
              alt={`${day.weather[0].description} icon`}
              className="weather-weekly__icon"
            />
            <div className="weather-weekly__temp">
              {day.main.temp.toFixed()}&deg;
            </div>
          </div>
        </div>
      </div>
    ));
  }

  return <>{renderWeeklyForecast()}</>;
}

export default WeeklyForecast;
