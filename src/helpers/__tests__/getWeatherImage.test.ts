// getWeatherImage.test.ts
import { getWeatherImage } from '../getWeatherImage'; // Adjust the path if needed

describe('getWeatherImage', () => {
  it('should return the correct image URL for a valid weather code', () => {
    const weatherCode = '0'; // Sunny
    const expectedImageUrl = 'http://openweathermap.org/img/wn/01d@2x.png';
    const result = getWeatherImage(weatherCode);
    expect(result).toBe(expectedImageUrl);
  });

  it('should return a default image URL for an invalid weather code', () => {
    const weatherCode = '999'; // Invalid code
    const expectedImageUrl = 'http://openweathermap.org/img/wn/unknown.png';
    const result = getWeatherImage(weatherCode);
    expect(result).toBe(expectedImageUrl);
  });

  it('should return the correct image URL for another valid weather code', () => {
    const weatherCode = '95'; // Thunderstorm
    const expectedImageUrl = 'http://openweathermap.org/img/wn/11d@2x.png';
    const result = getWeatherImage(weatherCode);
    expect(result).toBe(expectedImageUrl);
  });
});
