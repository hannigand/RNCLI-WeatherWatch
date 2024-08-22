import React from 'react';
// import '@testing-library/jest-dom/extend-expect'
import {
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor,
} from '@testing-library/react-native';
import userEvent from '@testing-library/user-event';
import SearchBox from '../SearchBox';

const mockData = [
  {
    admin1: 'Inner Mongolia',
    admin1_id: 2035607,
    admin2: 'Tongliao Shi',
    admin2_id: 2036421,
    country: 'China',
    country_code: 'CN',
    country_id: 1814991,
    elevation: 354,
    feature_code: 'PPL',
    id: 2036610,
    latitude: 44.71667,
    longitude: 121.08333,
    name: 'Ih',
    timezone: 'Asia/Shanghai',
  },
];

describe('Card component test', () => {
  let mockFunc: jest.Mock = jest.fn();
  beforeEach(() => {
    jest.clearAllMocks();
    cleanup();
    render(
      <SearchBox
        searchInputValue={'Pune'}
        selectedArea={mockData}
        handleAreaSearch={mockFunc}
        handleSelectedSearch={mockFunc}
      />,
    );
  });

  it('check wether component render successfully', async () => {
    await screen.getByDisplayValue('Pune');
    await screen.getByTestId('input-search');
    await screen.getByTestId('input-search-img');
  });

  it('on change functionality test', async () => {
    const inputText = await screen.getByTestId('input-search');
    waitFor(async() => {
      expect(inputText).toBeInTheDocument();
      userEvent.type(inputText, 'Ih');
      expect(mockFunc).toHaveBeenCalled()
      await screen.findAllByText('Ih');
      await screen.findAllByText('Tongliao Shi');
    });
  });
});
