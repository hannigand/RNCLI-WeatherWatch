import React from 'react';
import '@testing-library/jest-dom';
import {fireEvent, render, screen} from '@testing-library/react-native';
import App from '../App';

it('check wether component render the App', async () => {
  render(<App />);
  await screen.getByTestId('input-search');
  await screen.getByTestId('input-search-img');
});
