import React from 'react';
// import '@testing-library/jest-dom/extend-expect'
import {render, screen, waitFor} from '@testing-library/react-native';
import Cards from '../Cards';

const weather_time = '';
const current_city = 'Pune';
const weather_codecity = '45';
const temp = '30°C';

describe('Card component test', () => {
  it('check wether component render successfully', async () => {
    let mockonDone: jest.Mock = jest.fn();
    render(
      <Cards
        time={weather_time}
        city={current_city}
        weather_code={weather_codecity}
        temp={temp}
      />,
    );
    await screen.findByText('Pune');
    await screen.findByText('Foggy');
    await screen.findAllByText('30°C');
    await screen.findByText('Real feel');
    await screen.getByTestId('card-item');
    const currentWeatherText = await screen.getByText("Tonight's Weather");
    waitFor(() => {
      expect(currentWeatherText).toBeInTheDocument();
    });
  });
});
