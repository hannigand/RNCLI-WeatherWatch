// placeSearchService.test.ts
import axios from 'axios';
import { fetchLocations } from '../placeSearchService';

// Mock axios module
jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('fetchLocations', () => {
  afterEach(() => {
    jest.resetAllMocks(); // Reset the mocks after each test
  });

  it('should return locations data when the API call is successful', async () => {
    // Mock successful response
    const mockData = {
      results: [
        { id: '1', name: 'Location 1', country: 'Country A', latitude: 10, longitude: 20 },
        { id: '2', name: 'Location 2', country: 'Country B', latitude: 30, longitude: 40 },
      ],
    };
    mockedAxios.get.mockResolvedValue({ data: mockData });

    const result = await fetchLocations('test');
    expect(result).toEqual(mockData.results);
  });

  it('should throw an error when the API call fails', async () => {
    // Mock error response
    mockedAxios.get.mockRejectedValue(new Error('Network Error'));

    await expect(fetchLocations('test')).rejects.toThrow('Network Error');
  });
});
