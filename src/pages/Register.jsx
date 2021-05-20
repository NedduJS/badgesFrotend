import React from 'react';

import SubHeader from '../components/Subheader';
import Card from '../components/Card';
import NewBadge from '../components/NewBadge';

import '../assets/styles/Register.css';

const Register = () => {
  return (
    <div className='register'>
      <SubHeader />
      <div className='register__main'>
        <NewBadge />
        <Card />
      </div>
    </div>
  );
};

export default Register;
