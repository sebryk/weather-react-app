import React, { useState, useEffect } from 'react';
import CurrentForecast from './components/CurrentForecast';
import WeeklyForecast from './components/WeeklyForecast';
import { getCurrentForecastData, getWeeklyForecastData } from './api/api';
import InputSearch from './components/InputSearch';
import Loader from './pages/Loader';
import { NotFound } from './pages/NotFound';

function App() {
  const [currentForecastData, setCurrentForecastData] = useState(null);
  const [weeklyForecastData, setWeeklyForecastData] = useState(null);
  const [submitCityName, setSubmitCityName] = useState('London');
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        setError(false);
        const currentForecastData = await getCurrentForecastData(submitCityName)
        setCurrentForecastData(currentForecastData)
        const weeklyForecastData = await getWeeklyForecastData(submitCityName)
        setWeeklyForecastData(weeklyForecastData)
      } catch(error) {
        setError(error.message)
      } finally {
        setIsLoading(false)
      }
    }
    fetchData()
  }, [submitCityName]);


  function handleSearchSubmit(cityName) {
    setSubmitCityName(cityName);
  }

  return (
    <div className='app'>
      <main className='app__container'>
        <InputSearch
          onSubmit = {handleSearchSubmit}
          currentForecastData = {currentForecastData}
        />
        {  
        error ? (
        <NotFound
        errorMessage = {error}
        />
        ) :
        isLoading ? (<Loader/>) :
        (
          <>
          <CurrentForecast
            currentForecastData={currentForecastData}
          />
          <WeeklyForecast
          weeklyForecastData={weeklyForecastData}
          />
          </>
          ) }
      </main>
    </div>
  )
}

export default App
