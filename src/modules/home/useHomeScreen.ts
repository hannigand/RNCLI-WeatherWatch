import { useEffect, useState } from 'react'
import { getLocationData, getWeatherForecast } from '../../api';
import { LocationData, WeatherImage, WeatherResponse, WeeklyWeatherItem } from '../../types';
import { calculateWeeklyForecast, formatDate, getWeatherForCurrentTime } from '../../helpers/globalFunctions';

const useHomeScreen = () => {
  const [locationData, setLocationData] = useState<LocationData | null>(null);
  const [weatherData, setWeatherData] = useState<WeatherResponse | null>(null);
  const [weeklyForecast, setWeeklyForecast] = useState<WeeklyWeatherItem[]>([]);
  const [weatherImage, setWeatherImage] = useState<WeatherImage>();

  const getCurrentLocation = async () => {
    try {
      const data = await getLocationData('surat');

      if (data && data.results.length > 0) {
        const location = data.results[0];
        setLocationData(location);
        const response = await getWeatherForecast(location.latitude, location.longitude);
        setWeatherData(response);
        const weatherImage = await getWeatherForCurrentTime(response.hourly, formatDate())
        setWeatherImage(weatherImage)
        const weeklyData = await calculateWeeklyForecast(response)
        setWeeklyForecast(weeklyData)
      } else {
        console.log('No data found');
      }
    } catch (error) {
      console.error('Error fetching location data: in ', error);
    }
  };

  useEffect(() => {
    getCurrentLocation();
  }, []);


  return {
    locationData,
    weatherData,
    weeklyForecast,
    weatherImage
  };
};

export default useHomeScreen;
