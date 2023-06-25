import brokenClouds from '../assets/weather-icons/broken-clouds.svg';
import clearSky from '../assets/weather-icons/clear-sky.svg';
import clearSkyNight from '../assets/weather-icons/clear-sky-night.svg';
import fewClouds from '../assets/weather-icons/few-clouds.svg';
import fewCloudsNight from '../assets/weather-icons/few-clouds-night.svg';
import mist from '../assets/weather-icons/mist.svg';
import rain from '../assets/weather-icons/rain.svg';
import rainNight from '../assets/weather-icons/rain-night.svg';
import scatteredClouds from '../assets/weather-icons/scattered-clouds.svg';
import showerRain from '../assets/weather-icons/shower-rain.svg';
import snow from '../assets/weather-icons/snow.svg';
import thunderstorm from '../assets/weather-icons/thunderstorm.svg';

export const weatherIcons = {
  '01d': clearSky,
  '01n': clearSkyNight,
  // '01n': clearSky,
  '02d': fewClouds,
  '02n': fewCloudsNight,
  // '02n': fewClouds,
  '03d': scatteredClouds,
  '03n': scatteredClouds,
  '04d': brokenClouds,
  '04n': brokenClouds,
  '09d': rain,
  '09n': rainNight,
  // '09n': rain,
  '10d': showerRain,
  '10n': showerRain,
  '11d': thunderstorm,
  '11n': thunderstorm,
  '13d': snow,
  '13n': snow,
  '50d': mist,
  '50n': mist,
};

export const weekDay = {
  0: 'Sunday',
  1: 'Monday',
  2: 'Tuesday',
  3: 'Wednesday',
  4: 'Thursday',
  5: 'Friday',
  6: 'Saturday',
};
