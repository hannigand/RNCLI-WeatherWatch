// placeSearchService.ts
import axios from 'axios';

export const fetchLocations = async (query: string): Promise<any[]> => {
  try {
    const response = await axios.get(
      `https://geocoding-api.open-meteo.com/v1/search?name=${query}`
    );
    return response.data.results || [];
  } catch (error) {
    console.error('Error fetching location data:', error);
    throw error;
  }
};
