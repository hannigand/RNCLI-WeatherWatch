import axios from 'axios';
import { WeatherResponse, WeatherData, GeocodingResponse } from '../types/weatherTypes';

const WEATHER_API_URL = 'https://api.open-meteo.com/v1/forecast';
const GEOCODING_API_URL = 'https://geocoding-api.open-meteo.com/v1/search';

export const fetchWeatherData = async (latitude: number, longitude: number): Promise<{ current: WeatherData; forecast: WeatherData[] }> => {
  try {
    const response = await axios.get<WeatherResponse>(
      `${WEATHER_API_URL}?latitude=${latitude}&longitude=${longitude}&current_weather=true&forecast_days=7&daily=temperature_2m_max,weather_code`
    );

    const current: WeatherData = {
      date: new Date().toISOString(),
      temperature: response.data.current_weather.temperature,
      weatherCode: response.data.current_weather.weathercode.toString(),
    };

    const forecast: WeatherData[] = response.data.daily.time.map((time: number, index: number) => ({
      date: time,
      temperature: response.data.daily.temperature_2m_max[index],
      weatherCode: response.data.daily.weather_code[index].toString(),
    }));

    return { current, forecast };
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw error;
  }
};

export const fetchLocationCoordinates = async (location: string): Promise<{ latitude: number; longitude: number }> => {
  try {
    const response = await axios.get<GeocodingResponse>(`${GEOCODING_API_URL}?name=${location}`);
    const result = response.data.results[0];
    return { latitude: result.latitude, longitude: result.longitude };
  } catch (error) {
    console.error('Error fetching geolocation data:', error);
    throw error;
  }
};
