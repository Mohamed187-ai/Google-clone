import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { Loading } from './Loading';

import { useResultsContext } from '../contexts/StateContextProvider';

export const Results = () => {
  const { results, loading, getResults, searchTerm } = useResultsContext();
  const location = useLocation();
  if(loading) return <Loading />;
  return (
    <div>Results</div>
  )
}
