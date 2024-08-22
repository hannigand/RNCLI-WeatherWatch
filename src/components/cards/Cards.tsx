import React from 'react';
import {Image, Text, View} from 'react-native';
import getWeatherImage from '../../helpers/getWeatherImage';
import {optionsDays} from '../../../AppConstants';
import {ICardsProps} from '../../utils/types';
import styles from './CardsStyle';

const Cards = ({time, city, weather_code, temp}: ICardsProps) => {
  const getWeatherData = getWeatherImage(weather_code);

  return (
    <View style={styles.card_container} testID='card-item'>
      <View style={styles.current_weather}>
        <View>
          <Text style={styles.weather_font_title}>{"Tonight's Weather"}</Text>
        </View>
        <View>
          <Text style={styles.weather_font_title}>
            {new Date(time).toLocaleDateString('en-GB', optionsDays)}
          </Text>
        </View>
      </View>

      <View style={styles.weather_desc_view}>
        <View style={styles.center_align}>
          <Text style={styles.weather_font_16_bold}>{city}</Text>
          <Image
            source={{
              uri: `${getWeatherData?.day?.image.replace('http', 'https')}`,
            }}
            width={65}
            height={65}
            alt="weather_image"
          />
          <Text>{getWeatherData?.day?.description}</Text>
        </View>
        <View>
          <Text style={styles.weather_temp}>{temp}</Text>
          <Text style={styles.weather_font_24}>{'Real feel'}</Text>
          <Text style={styles.weather_font_16_bold}>{'30°C'}</Text>
        </View>
      </View>
    </View>
  );
};

export default Cards;
