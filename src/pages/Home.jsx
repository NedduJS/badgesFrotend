import React from 'react';
import { Link } from 'react-router-dom';

import Button from '../components/Button';

import '../assets/styles/Home.css';
import astronauts from '../assets/static/astronauts.svg';
import platziConfLogo from '../assets/static/platziconf-logo.svg';
import stars from '../assets/static/stars.svg';

const Home = () => {
  return (
    <div className='home' style={{ backgroundImage: `url(${stars})` }}>
      <div className='homeStart'>
        <img
          className='platziConfLogo'
          src={platziConfLogo}
          alt='Logo de la conferencia'
        />
        <p className='homeTitle'>Badge Management System</p>
        <Link to='/search'>
          <Button text='Start' className='button' />
        </Link>
      </div>
      <img className='astronauts' src={astronauts} alt='Platzinautas' />
    </div>
  );
};

export default Home;
