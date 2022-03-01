import React, { useEffect, useState } from 'react';
import { useDebounce } from 'use-debounce';
import { useResultsContext } from '../contexts/StateContextProvider'
import { Links } from './Links';


export const Search = () => {
  const [text, setText] = useState('javascript');
  const { setSearchTerm } = useResultsContext();
  const [debouncedValue] = useDebounce(text, 300);

  useEffect(() => {
    if(debouncedValue) setSearchTerm(debouncedValue);
  }, [debouncedValue]);
  return (
    <div className='relative sm:ml-48 md:ml-72 sm:-mt-10 mt-3'>
      <input
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="🔎 Search Her ....."
        type="text"
        className="sm:w-96 w-80 h-10 dark:bg-gray-200 border rounded-full shadow-sm outline-none p-6 to-black hover:shadow-lg"
      />
      {text && (
        <button type='button' className='absolute top-1.5 text-2xl to-gray-500' onClick={() => setText('')}>
          ❌
        </button>
      )}
      <Links />
    </div>
  )
}
