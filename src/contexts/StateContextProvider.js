import React, { useContext, createContext, useState } from 'react'
const ResultContext = createContext();
const baseUrl = 'https://google-search3.p.rapidapi.com/api/v1'

export const StateContextProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const getResults = async (type) => {
    setLoading(true);
    const response = await fetch(`${baseUrl}/search?q=${type}`, {
      method: 'GET',
      headers: {
        'x-rapidapi-host': 'google-search3.p.rapidapi.com',
        'x-rapidapi-key': '941068f721mshb92554049f33955p1e8db0jsn93cb5ceb8562'
      }
    })
    const data = await response.json();
    setResults(data);
    setLoading(false);
  }
  return (
    <ResultContext.Provider value={{ results, loading, getResults, searchTerm, setSearchTerm }}>
      {children}
    </ResultContext.Provider>
  )
}

export const useResultsContext = () => useContext(ResultContext);