import {ICoordinatesProps} from './types';

export const fetchWeatherData = async (values: ICoordinatesProps) => {
  try {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${values.latitude}&longitude=${values.longitude}&current=temperature_2m&hourly=temperature_2m,weather_code`;
    const resolvedData = await fetch(url);
    const retrievedResposne = await resolvedData.json();
    return retrievedResposne;
  } catch (err) {
    console.log(err);
  }
};
export const fetchAreaWeatherSearch = async (searchedValue: string) => {
  try {
    const url = `https://geocoding-api.open-meteo.com/v1/search?name=${searchedValue}`;
    const resolvedData = await fetch(url);
    const retrievedResposne = await resolvedData.json();
    const {results} = retrievedResposne;
    return results;
  } catch (error) {
    console.log(error);
  }
};
