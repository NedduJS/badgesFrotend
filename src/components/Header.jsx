import React from 'react';
import { Link } from 'react-router-dom';

import '../assets/styles/components/Header.css';
import logo from '../assets/static/logo.svg';

const Header = () => {
  return (
    <div className='header'>
      <Link to='/'>
        <img src={logo} alt='Header logo PlatziConf' />
      </Link>
      <p>
        Platzi
        <b>Conf</b>
      </p>
    </div>
  );
};

export default Header;
