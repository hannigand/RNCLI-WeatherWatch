import React from 'react';
import {
  View,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Text,
} from 'react-native';
import {ISearchBoxProps, ISelectedCityProps} from '../../utils/types';
import {INPUT_PLACEHOLDER} from '../../../AppConstants';
import styles from './SearchBoxStyles';

const SearchBox = ({
  searchInputValue,
  selectedArea,
  handleAreaSearch,
  handleSelectedSearch,
}: ISearchBoxProps) => {
  return (
    <>
      <View style={styles.search_container}>
        <Image
          testID="input-search-img"
          source={require('../../../assets/icons/search.png')}
          style={{width: 25, height: 25}}
          alt="search-image"
        />
        <TextInput
          testID="input-search"
          value={searchInputValue}
          placeholder={INPUT_PLACEHOLDER}
          onChangeText={handleAreaSearch}
        />
      </View>

      {searchInputValue && searchInputValue.length > 0 && (
        <ScrollView style={styles.search_scroll}>
          {selectedArea &&
            selectedArea.length > 0 &&
            selectedArea.map((item: ISelectedCityProps, index: number) => {
              return (
                <TouchableOpacity
                  key={index}
                  style={styles.search_item}
                  onPress={() => handleSelectedSearch(item)}>
                  <Text>{item.name}</Text>
                  <Text>
                    {item.admin2} {item.admin1} {item.country_code}
                  </Text>
                </TouchableOpacity>
              );
            })}
        </ScrollView>
      )}
    </>
  );
};

export default SearchBox;
