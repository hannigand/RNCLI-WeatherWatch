import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  card_container: {
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 16,
    margin: 16,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
  },
  current_weather: {
    borderBottomWidth: 1,
    borderBottomColor: '#eeee',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingBottom: 12,
  },
  weather_img_view: {flexDirection: 'row', alignItems: 'center'},
  weather_desc_view: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    paddingVertical:16
  },
  weather_temp: {fontSize: 24, fontWeight: 'bold'},
  weather_font_24: {fontSize: 24},
  weather_font_16_bold: {fontSize: 16, fontWeight: 'bold'},
  weather_font_title: {fontSize: 18, fontWeight: '400'},
  center_align:{justifyContent: 'center', alignItems: 'center'}
});
export default styles;
