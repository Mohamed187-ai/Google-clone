import React from 'react';
import { NavLink } from 'react-router-dom';

const links = [
  { url: '/search', text: '🔎 Search' },
  { url: '/images', text: '📷 Images' },
  { url: '/news', text: '📰 News' },
  { url: '/videos', text: '📽 Videos' },
];

export const Links = () => {
  let activeClassName = 'text-blue-700 border-blue-700 border-b-2 dark:text-blue-300 pb-2 mx-8 mb-0 pb-0'
  return (
    <div className='flex sm:justify-around justify-between items-center mt-4'>
      {links.map(({url, text}) => (
        <NavLink className={({isActive}) => isActive ? activeClassName : `mx-8 mb-0 pb-0`} key={url} to={url}>
          {text}
        </NavLink>
      ))}
    </div>
  )
}
