import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {WeeklyWeatherItem} from '../../types';
import {styles} from './FutureWeatherDataItemStyle';

const FutureWeatherDataItem = ({
  item,
}: {
  item: WeeklyWeatherItem;
}): React.JSX.Element => {
  return (
    <View style={StyleSheet.flatten([styles.rootViewStyle])}>
      <Text style={StyleSheet.flatten([styles.timeTextStyle])}>
        {item?.date}
      </Text>
      <View style={styles.imageViewStyle}>
        <Image
          style={styles.imageStyle}
          source={{
            uri: item.weatherImage.image,
          }}
        />
      </View>
      <View style={styles.degreeIconViewStyle}>
        <Text style={StyleSheet.flatten([styles.degreeTextStyle])}>
          {item.averageTemperature}
        </Text>
        <View style={StyleSheet.flatten([styles.degreeOuterViewStyle])}>
          <View style={StyleSheet.flatten([styles.degreeInnerViewStyle])} />
        </View>
      </View>
    </View>
  );
};

export default FutureWeatherDataItem;
