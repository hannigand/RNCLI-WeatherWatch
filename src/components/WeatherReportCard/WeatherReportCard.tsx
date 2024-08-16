import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import getWeatherImage from '../../helpers/getWeatherImage';
import styles from './WeatherReportCardStyle';
import {options_time, options_weekly} from '../../../AppConstants';
import {IReportCardProps} from '../../utils/types';

const WeatherReportCard = ({
  weatherData,
  title,
  isHourly = true,
}: IReportCardProps) => {
  const dataToBeVisible = isHourly ? weatherData.slice(0, 25) : weatherData;
  return (
    <View style={styles.white_bg}>
      {dataToBeVisible && dataToBeVisible.length > 0 && (
        <>
          <View style={styles.list_header}>
            <Text style={styles.font_20_bold}>{title}</Text>
          </View>
          <ScrollView horizontal>
            <View style={styles.row_with_p_16}>
              {dataToBeVisible &&
                Array.isArray(dataToBeVisible) &&
                dataToBeVisible?.map((item: any, index: any) => {
                  const getImage = getWeatherImage(item.weather_code);
                  return (
                    <View key={index} style={styles.weather_card}>
                      <Text style={styles.font_22} key={index}>
                        {new Date(item.time).toLocaleString(
                          [],
                          isHourly ? options_time : options_weekly,
                        )}
                      </Text>
                      {!isHourly && (
                        <Text style={styles.font_time}>
                          {new Date(item.time).toLocaleString([], options_time)}
                        </Text>
                      )}
                      <Image
                        source={{
                          uri: `${getImage.day.image.replace('http', 'https')}`,
                        }}
                        width={85}
                        height={85}
                      />
                      <Text style={styles.font_24_bold}>
                        {item.temp + '°C'}
                      </Text>
                      <Text style={styles.font_20_green}>
                        {getImage.day.description}
                      </Text>
                    </View>
                  );
                })}
            </View>
          </ScrollView>
        </>
      )}
    </View>
  );
};

export default WeatherReportCard;
