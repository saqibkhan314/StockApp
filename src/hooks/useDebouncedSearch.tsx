// hooks/useDebouncedSearch.js
import { useState, useEffect } from 'react';

export const useDebouncedSearch = (initialValue = '', delay = 500) => {
  const [searchTerm, setSearchTerm] = useState(initialValue);
  const [debouncedTerm, setDebouncedTerm] = useState(initialValue);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedTerm(searchTerm);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [searchTerm, delay]);

  return [searchTerm, debouncedTerm, setSearchTerm];
};