import React from 'react';
import {Image, SafeAreaView, Text, View} from 'react-native';
import {styles} from './HomeScreenStyle';
import useHomeScreen from './useHomeScreen';
import {formatDate} from '../../helpers/globalFunctions';
import {ListView} from '../../components';

const HomeScreen = (): React.JSX.Element => {
  const {locationData, weatherData, weeklyForecast, weatherImage} =
    useHomeScreen();
  return (
    <SafeAreaView style={styles.rootContainerStyle}>
      <View>
        <Text style={styles.locationName}>{locationData?.name}</Text>
        <Text style={styles.currentDate}>
          {formatDate(weatherData?.current.time ?? '')}
        </Text>
        <View style={styles.temperatureContainer}>
          <View>
            <View style={styles.degreeIconViewStyle}>
              <Text style={styles.currentTemp}>
                {weatherData?.current.temperature_2m.toFixed()}
              </Text>
              <View style={styles.degreeOuterViewStyle}>
                <View style={styles.degreeInnerViewStyle} />
              </View>
            </View>
            <Text style={styles.currentWeatherDescStyle}>
              {weatherImage?.description}
            </Text>
          </View>
          <View style={styles.weatherImageContainer}>
            <Image
              source={{uri: weatherImage?.image}}
              style={styles.weatherImageStyle}
            />
          </View>
        </View>
        <ListView title={`Weekly Weather`} data={weeklyForecast} />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
