import React, { useContext, createContext, useState } from 'react'
const ResultContext = createContext();
const baseUrl = 'https://google-search3.p.rapidapi.com/api/v1'

export const StateContextProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('cats');

  const getResults = async (type) => {
    setLoading(true);
    const response = await fetch(`${baseUrl}${type}`, {
      method: 'GET',
      headers: {
        'x-rapidapi-host': 'google-search3.p.rapidapi.com',
        'x-rapidapi-key': '941068f721mshb92554049f33955p1e8db0jsn93cb5ceb8562'
      }
    })
    const data = await response.json();
    if(type.includes('/news')) {
      setResults(data.entries);
    }else if(type.includes('/images')) {
      setResults(data.images_results);
    }else{
      setResults(data.results);
    }
    setLoading(false);
  }
  return (
    <ResultContext.Provider value={{ results, loading, getResults, searchTerm, setSearchTerm }}>
      {children}
    </ResultContext.Provider>
  )
}

export const useResultsContext = () => useContext(ResultContext);