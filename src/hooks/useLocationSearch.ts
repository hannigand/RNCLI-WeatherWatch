import { useState, useCallback } from 'react';
import { fetchLocations } from '../api/placeSearchService';

// Define types for the location data
type Location = {
  id: string;
  name: string;
  country: string;
  latitude: number;
  longitude: number;
};

// Debounce function
const debounce = (func: Function, delay: number) => {
  let timeoutId: number;
  return (...args: any) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
};

const useLocationSearch = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [searchResults, setSearchResults] = useState<Location[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Debounced function for fetching locations
  const debouncedFetchLocations = useCallback(
    debounce(async (query: string) => {
      if (!query) return;
      setIsLoading(true);
      try {
        const results = await fetchLocations(query);
        console.log("DATA: ", results)
        // Filter out duplicate locations by their ID
        const uniqueResults = Array.from(
          new Map(results.map((item) => [item.id, item])).values()
        );
        console.log("UNIQUE DATA: ", uniqueResults)

        setSearchResults(uniqueResults);
      } catch (error) {
        // Handle error if necessary
      } finally {
        setIsLoading(false);
      }
    }, 500),
    []
  );

  const handleSearchTermChange = (term: string) => {
    setSearchTerm(term);
    debouncedFetchLocations(term);
  };

  return {
    searchTerm,
    searchResults,
    isLoading,
    handleSearchTermChange,
  };
};

export default useLocationSearch;
