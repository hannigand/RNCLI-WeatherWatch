import { useState } from 'react';
import { fetchWeatherData, fetchLocationCoordinates } from '../api/weatherService';
import { WeatherData } from '../types/weatherTypes';

const useWeather = () => {
  const [currentWeather, setCurrentWeather] = useState<WeatherData | null>(null);
  const [forecast, setForecast] = useState<WeatherData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchWeatherDataForLocation = async (location: string) => {
    setLoading(true);
    setError(null);
    try {
      const { latitude, longitude } = await fetchLocationCoordinates(location);
      const { current, forecast } = await fetchWeatherData(latitude, longitude);
      setCurrentWeather(current);
      setForecast(forecast);
    } catch (error) {
      setError('Failed to fetch weather data');
    } finally {
      setLoading(false);
    }
  };

  return {
    currentWeather,
    forecast,
    loading,
    error,
    fetchWeatherData: fetchWeatherDataForLocation,
  };
};

export default useWeather;
