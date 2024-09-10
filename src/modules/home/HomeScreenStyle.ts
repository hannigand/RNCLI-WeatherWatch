import { StyleSheet } from 'react-native';
import { Colors, horizontalScale, moderateScale, verticalScale } from '../../theme';

export const styles = StyleSheet.create({
  rootContainerStyle: {
    flex: 1,
    backgroundColor: Colors.lightBlue,
    paddingHorizontal: horizontalScale(10),
    paddingVertical: verticalScale(10),
  },
  locationName: {
    fontSize: moderateScale(35),
    color: Colors.black,
    fontWeight: '600'
  },
  currentDate: {
    fontSize: moderateScale(20),
    color: Colors.grey,
  },
  currentTemp: {
    fontSize: moderateScale(60),
    fontWeight: 'bold',
    textAlign: 'center',
    color: Colors.black,
  },
  temperatureContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: verticalScale(10),
    marginBottom: verticalScale(30)
  },
  degreeIconViewStyle: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  degreeOuterViewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: verticalScale(10),
    height: moderateScale(20),
    width: moderateScale(20),
    backgroundColor: Colors.black,
    borderRadius: moderateScale(10),
  },
  degreeInnerViewStyle: {
    height: moderateScale(10),
    width: moderateScale(10),
    backgroundColor: Colors.lightBlue,
    borderRadius: moderateScale(5),
  },
  weatherImageContainer: {
    height: moderateScale(100),
    width: moderateScale(100),
  },
  weatherImageStyle: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain'
  },
  currentWeatherDescStyle: {
    fontSize: moderateScale(22),
    color: Colors.grey,
    fontWeight: '500'
  }
});
