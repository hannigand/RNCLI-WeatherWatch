// WeatherCard.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react-native';
import WeatherCard from './WeatherCard'; // Adjust the path if necessary
import { WeatherData } from '../types/weatherTypes'; // Adjust the path if necessary
import { getWeatherImage } from '../helpers/getWeatherImage';

// Mock the getWeatherImage function
jest.mock('../helpers/getWeatherImage', () => ({
  getWeatherImage: jest.fn(),
}));

describe('WeatherCard Component', () => {
  const mockWeatherData: WeatherData = {
    date: '2024-09-02T12:00:00Z',
    temperature: '25',
    weatherCode: '0', // Example weather code
  };

  it('renders weather data correctly', () => {
    // Mock the return value of getWeatherImage
    (getWeatherImage as jest.Mock).mockReturnValue('http://openweathermap.org/img/wn/01d@2x.png');

    render(<WeatherCard weather={mockWeatherData} />);

    // Check if the date is displayed correctly
    expect(screen.getByText(new Date(mockWeatherData.date).toLocaleDateString())).toBeTruthy();
    
    // Check if the temperature is displayed correctly
    expect(screen.getByText(`${mockWeatherData.temperature}°C`)).toBeTruthy();
  });

  it('shows a default image when weatherCode is not available', () => {
    // Mock the return value of getWeatherImage for unknown weather codes
    (getWeatherImage as jest.Mock).mockReturnValue('http://openweathermap.org/img/wn/unknown.png');
    
    const weatherData: WeatherData = {
      date: '2024-09-02T12:00:00Z',
      temperature: '25',
      weatherCode: 'unknown_code', // Invalid weather code
    };

    render(<WeatherCard weather={weatherData} />);
  });
});
