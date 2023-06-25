const API_KEY = 'e8d03c3238e5a4df02a805a749bff9de';

export async function getCurrentForecastData(cityName) {
  const CURRENT_FORECAST_API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${API_KEY}`;
  try {
    const res = await fetch(CURRENT_FORECAST_API_URL);
    if (res.ok) {
      const data = await res.json();
      return data;
    } else if (!res.ok && res.status === 404) {
      throw new Error('City not found');
    } else {
      throw new Error('Failed to fetch current forecast');
    }
  } catch (error) {
    console.log('Error fetching current forecast:', error);
    throw error;
  }
}

export async function getWeeklyForecastData(cityName) {
  const WEEKLY_FORECAST_API_URL = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=metric&appid=${API_KEY}`;
  try {
    const res = await fetch(WEEKLY_FORECAST_API_URL);
    if (res.ok) {
      const data = await res.json();
      return data;
    } else {
      throw new Error('Failed to fetch weekly forecast');
    }
  } catch (error) {
    console.log('Error fetching current forecast:', error);
    throw error;
  }
}
