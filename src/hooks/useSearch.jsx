// hooks/useSearch.js
'use client';
import { useState } from 'react';

const useSearch = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [results, setResults] = useState([]);

  const searchCall = async (searchTerm) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('http://localhost:5000/search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userName: searchTerm }),
        credentials:"include",
      });

      if (!response.ok) {
        throw new Error('No users found');
      }

      const data = await response.json();
      console.log(data);
      setResults(data.users);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    error,
    results,
    searchCall,
  };
};

export default useSearch;
