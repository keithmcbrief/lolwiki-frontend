import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <ul className='sidebar'>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/champions'>All Champions</Link>
      </li>
      <li>
        <Link to='/roles'>All Roles</Link>
      </li>
      <hr />
      <li>
        <Link to='/champion/create'>Create New Champion</Link>
      </li>
      <li>
        <Link to='/role/create'>Create New Role</Link>
      </li>
    </ul>
  );
};

export default Sidebar;
