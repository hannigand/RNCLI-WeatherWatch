import {Dimensions, StyleSheet} from 'react-native';
const screenWidth = Dimensions.get('screen').width;
const styles = StyleSheet.create({
  white_bg: {
    backgroundColor: 'white',
    marginBottom: 32,
  },
  list_header: {
    padding: 16,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#eeee',
  },
  row_with_p_16: {padding: 16, flexDirection: 'row'},
  weather_card: {
    padding: 16,
    flexDirection: 'column',
    backgroundColor: '#fff',
    borderRadius: 5,
    marginHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  font_22: {fontSize: 22, color: 'crimson'},
  font_24_bold: {fontSize: 24, fontWeight: 'bold'},
  font_20_green: {fontSize: 20, color: 'green'},
  font_20_bold: {fontSize: 18, fontWeight: '400'},
  font_time: {fontSize: 22, fontWeight: '500', color: '#f2f1f1'},
});
export default styles;
