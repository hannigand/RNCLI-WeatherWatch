import {Dimensions, StyleSheet} from 'react-native';
const screenWidth = Dimensions.get('screen').width;
const styles = StyleSheet.create({
  search_container: {
    padding: 16,
    backgroundColor: 'white',
    margin: 16,
    flexDirection: 'row',
  },
  search_scroll: {
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 2,
    marginHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
  },
  search_item: {
    backgroundColor: '#fff',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eeee',
    width: screenWidth,
  },
});
export default styles;
