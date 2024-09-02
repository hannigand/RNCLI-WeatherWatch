// SearchBar.tsx
import React, { useState, useEffect } from 'react';
import { View, TextInput, FlatList, Text, TouchableOpacity, StyleSheet, KeyboardAvoidingView } from 'react-native';
import useLocationSearch from '../hooks/useLocationSearch';

interface SearchBarProps {
  onSearch: (location: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [input, setInput] = useState<string>('');
  const { searchTerm, searchResults, isLoading, handleSearchTermChange } = useLocationSearch();

  useEffect(() => {
    handleSearchTermChange(input);
  }, [input]);

  const handleInputChange = (text: string) => {
    setInput(text);
  };

  const handleSelectLocation = (location: string) => {
    onSearch(location);
    setInput('');
  };

  const renderItem = ({ item }: { item: any }) => (
    <TouchableOpacity onPress={() => handleSelectLocation(item.name)} style={styles.item}>
      <Text>{item.name}</Text>
      <Text>{item.country}</Text>
    </TouchableOpacity>
  );

  return (
    <KeyboardAvoidingView style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter location"
        value={input}
        onChangeText={handleInputChange}
      />
      {isLoading && <Text>Loading...</Text>}
      {searchResults.length > 0 && (
        <FlatList
          data={searchResults}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          style={styles.dropdown}
        />
      )}
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    marginVertical: 10,zIndex: 3, // works on ios
    elevation: 3,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    borderRadius: 5,
    marginBottom: 5,
    minWidth: '60%',
    minHeight: 40
  },
  dropdown: {
    position: 'absolute',
    top: 50, // Adjust based on your layout
    width: '100%',
    maxHeight: 200,
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff', zIndex: 3, // works on ios
    elevation: 3,
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default SearchBar;
