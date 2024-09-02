import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import WeatherCard from './src/components/WeatherCard';
import SearchBar from './src/components/SearchBar';
import useWeather from './src/hooks/useWeather';

const App: React.FC = () => {
  const [location, setLocation] = useState<string>('New Delhi');
  const { currentWeather, forecast, loading, error, fetchWeatherData } = useWeather();

  useEffect(() => {
    fetchWeatherData(location);
  }, [location]);

  const handleSearch = (newLocation: string) => {
    setLocation(newLocation);
  };

  if (loading) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text>Error: {error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <SearchBar onSearch={handleSearch} />
      <Text style={styles.title}>{location}</Text>
      <Text style={styles.title}>Current Weather</Text>
      {currentWeather && <WeatherCard weather={currentWeather} />}
      <Text style={styles.title}>Weekly Forecast</Text>
      <FlatList
        data={forecast}
        renderItem={({ item }) => <WeatherCard weather={item} />}
        keyExtractor={(item) => item.date}
        horizontal={true} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
});

export default App;
