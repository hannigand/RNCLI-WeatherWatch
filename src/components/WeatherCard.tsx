import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { WeatherData } from '../types/weatherTypes';
import {getWeatherImage} from '../helpers/getWeatherImage';

interface WeatherCardProps {
  weather: WeatherData;
}

const WeatherCard: React.FC<WeatherCardProps> = ({ weather }) => {
  const { date, temperature, weatherCode } = weather;
  const weatherImage = getWeatherImage(weatherCode);

  return (
    <View style={styles.card}>
      <Text style={styles.date}>{new Date(date).toLocaleDateString()}</Text>
      <Image source={{ uri: weatherImage }} style={styles.image} />
      <Text style={styles.temperature}>{temperature}°C</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'lightgrey',
    padding: 15,
    marginHorizontal: 10,
    borderRadius: 10,
    alignItems: 'center',
    height: 180,
    borderColor: 'grey',
    borderWidth: 1,
  },
  date: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  image: {
    width: 50,
    height: 50,
    marginVertical: 10,
  },
  temperature: {
    fontSize: 16,
  },
});

export default WeatherCard;
