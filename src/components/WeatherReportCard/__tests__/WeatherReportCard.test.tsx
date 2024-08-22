import React from 'react';
import {render, screen} from '@testing-library/react-native';
import WeatherReportCard from '../WeatherReportCard';

const mockData = [
  {
    temp: 30,
    time: '2024-08-22T13:20:49Z', // ISO 8601 date string
    weather_code: 95,
  },
];

describe('Card component test', () => {
  let mockFunc: jest.Mock = jest.fn();
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('check wether componenst render successfully', async () => {
    render(
      <WeatherReportCard
        weatherData={mockData}
        title={'Bangalore'}
        isHourly={true}
      />,
    );
    await screen.getByText('Bangalore');
    await screen.getByText('30°C');
    await screen.getByText('Thunderstorm');
    await screen.getByTestId('weather-img');
    await screen.getByTestId('weather-report-cards');
    await screen.getByText('06:50 PM');
  });

  it('check date when required in days', async () => {
    render(
      <WeatherReportCard
        weatherData={mockData}
        title={'Bangalore'}
        isHourly={false}
      />,
    );
    await screen.getByText('06:50 PM');
    await screen.getByText('Thursday, August 22');
  });
});
