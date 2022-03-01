import React, { useContext, createContext, useState } from 'react'
const ResultContext = createContext();
const baseUrl = 'https://google-search3.p.rapidapi.com/api/v1'

export const StateContextProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('javascript');

  const getResults = async (type) => {
    setLoading(true);
    const response = await fetch(`${baseUrl}${type}`, {
      method: 'GET',
      headers: {
        'x-rapidapi-host': 'google-search3.p.rapidapi.com',
        'x-rapidapi-key': process.env.REACT_APP_API_KEY,
      }
    })
    const data = await response.json();
    if(type.includes('/news')) {
      setResults(data.entries);
    }else if(type.includes('/images')) {
      setResults(data.image_results);
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