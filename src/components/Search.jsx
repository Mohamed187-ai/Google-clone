import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Results } from './Results'

export const Search = () => {
  return (
    <div className='p-4'>
      <Routes>
        <Route path='/' element={<Navigate to='/search' />} />
        {/* <Route path={['/search', 'images', 'news', 'videos']} element={<Results />} /> */}
        {['/search', 'images', 'news', 'videos'].map((path, index) => 
          <Route path={path} element={<Results />} />
        )}
      </Routes>
    </div>
  )
}
