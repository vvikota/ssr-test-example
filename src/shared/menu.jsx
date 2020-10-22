import React from 'react';
import {NavLink} from 'react-router-dom';
import {data} from './data';

const Menu = () => {
  return (
    <ul>
      {data.map((link, index) => (
        <li key={index}>
          <NavLink to={`/${link}`}>
            {link}
          </NavLink>
        </li>
      ))}
    </ul>
  )
}

export default Menu;