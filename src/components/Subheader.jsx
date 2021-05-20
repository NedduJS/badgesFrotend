import React from 'react';

import '../assets/styles/components/Subheader.css';
import platziConfLogo from '../assets/static/platziconf-logo.svg';
import stars from '../assets/static/stars.svg';

const subheaderStyle = {
  backgroundImage: `url(${stars})`,
};

const Subheader = () => {
  return (
    <section className='subheader' style={subheaderStyle}>
      <img src={platziConfLogo} alt='Logo de PlatziConf' />
    </section>
  );
};

export default Subheader;
