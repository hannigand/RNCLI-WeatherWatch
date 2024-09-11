import { StyleSheet } from 'react-native';
import { Colors, horizontalScale, moderateScale, verticalScale } from '../../theme';

export const styles = StyleSheet.create({
  rootContainerStyle: {
    flex: 1,
    backgroundColor: Colors.lightBlue,
  },
  subContainerStyle: {
    paddingHorizontal: horizontalScale(10),
    paddingVertical: verticalScale(10),
  },
  topDateContainer: {
    flexDirection: 'row',
    justifyContent: "space-between"
  },
  searchIconContainerStyle: {
    height: moderateScale(30),
    width: moderateScale(30),
    margin: moderateScale(10)
  },
  searchIconStyle: {
    height: '100%',
    width: '100%'
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
  },
  searchBarContainer: {
    paddingHorizontal: horizontalScale(10),
    marginVertical: verticalScale(10),
  },
  searchInput: {
    borderWidth: 1,
    borderColor: Colors.lightGrey,
    borderRadius: moderateScale(8),
    padding: moderateScale(8),
    fontSize: moderateScale(16),
  },
  locationOption: {
    paddingVertical: verticalScale(10),
    borderBottomWidth: 1,
    borderBottomColor: Colors.white,
  },
  locationOptionText: {
    fontSize: moderateScale(16),
    color: Colors.grey,
  },
  locationListStyle: {
    maxHeight: verticalScale(200)
  },
  listEmptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: horizontalScale(10),
    paddingVertical: verticalScale(10)
  },
  listEmptyTextStyle: {
    fontSize: moderateScale(18),
    color: Colors.black
  }
});
