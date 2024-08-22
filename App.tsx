import React, {useEffect, useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import Cards from './src/components/cards/Cards';
import useGenericSearchApiHandle from './src/helpers/customHooks';
import SearchBox from './src/components/SearchBox/SearchBox';
import WeatherReportCard from './src/components/WeatherReportCard/WeatherReportCard';
import {
  HR_WEATHER,
  WEKLY_WEATHER,
  defaultAddress,
  selectedDefaultCity,
} from './AppConstants';
import {
  ICoordinatesProps,
  ISelectedCityProps,
  IWeatherReportCardProps,
} from './src/utils/types';
import {fetchAreaWeatherSearch, fetchWeatherData} from './src/utils/api';

const App = () => {
  const [weatherReport, setWeatherReport] = useState<any>({});
  const [selectedArea, setSelectedArea] = useState([]);
  const [selectedCity, setSelectedCity] = useState<ISelectedCityProps>();

  const [extractedweatherReport, seteExractedweatherReport] = useState<
    IWeatherReportCardProps[]
  >([]);

  const [searchInputValue, setSearchInputValue] = useState('');

  const getWeatherData = async (values: ICoordinatesProps) => {
    const retrievedResposne = await fetchWeatherData(values);
    setWeatherReport(retrievedResposne);
  };

  const handleAreaWeatherSearch = async (searchedValue: string) => {
    const retrievedResposne = await fetchAreaWeatherSearch(searchedValue);
    setSelectedArea(retrievedResposne);
  };

  const handleAreaSearch = (value: string) => {
    if (value === '') {
      setSearchInputValue('');
      return;
    } else {
      setSearchInputValue(value);
      useGenericSearchApiHandle(handleAreaWeatherSearch(value), 3000);
    }
  };

  const handleSelectedSearch = (data: ISelectedCityProps) => {
    if (data) {
      setSelectedCity(data);
      getWeatherData(data);
    }
    setSearchInputValue('');
    setWeatherReport([]);
  };

  const {hourly, current, current_units} = weatherReport;

  useEffect(() => {
    if (hourly && Array.isArray(hourly.temperature_2m)) {
      const combinedWeatherReport = hourly.temperature_2m.map(
        (it: string | number, ind: string | number) => {
          return {
            temp: it,
            time: hourly.time[ind],
            weather_code: hourly.weather_code[ind],
          };
        },
      );
      seteExractedweatherReport(combinedWeatherReport);
    }
  }, [hourly]);

  useEffect(() => {
    setSearchInputValue('Pune');
    setSelectedCity(selectedDefaultCity);
    getWeatherData(defaultAddress);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <SearchBox
        searchInputValue={searchInputValue}
        selectedArea={selectedArea}
        handleAreaSearch={handleAreaSearch}
        handleSelectedSearch={handleSelectedSearch}
      />
      {weatherReport && selectedCity && current && current.time && (
        <ScrollView>
          <Cards
            time={current.time}
            city={selectedCity.name}
            weather_code={hourly?.weather_code[0]}
            temp={current?.temperature_2m}
          />
          <WeatherReportCard
            weatherData={extractedweatherReport}
            title={HR_WEATHER}
          />
          <WeatherReportCard
            weatherData={extractedweatherReport}
            title={WEKLY_WEATHER}
            isHourly={false}
          />
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e4eaf2',
  },
});
export default App;
