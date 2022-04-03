// inspired by https://dev.to/gabe_ragland/debouncing-with-react-hooks-jci

import { useEffect, useState } from "react";

// only update the value if it hasn't been updated within the delay timeframe, otherwise return the 'old' one
export const useDebounce = <T>(value: T, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const timeout = setTimeout(() => setDebouncedValue(value), delay);

    return () => clearTimeout(timeout);
  }, [value, delay]);

  return debouncedValue;
};

// USAGE
/*
const Search = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [results, setResults] = useState([]);
    const debouncedSearchTerm = useDebounce(searchTerm, 500);
  
    useEffect(async () => {
      if (!debouncedSearchTerm) {
        setResults([]);
        return;
      }
  
      const searchResults = await searchAPI(debouncedSearchTerm);
      setResults(searchResults);
    }, [debouncedSearchTerm]);
  
    return (
      <div>
        <input placeholder="Search" onChange={e => setSearchTerm(e.target.value)} />
        {results.map(result => (
          <p key={result.id}>{result.title}</p>
        ))}
      </div>
    );
  };
*/
