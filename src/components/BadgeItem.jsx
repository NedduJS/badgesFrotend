import React from 'react';

import gravatar from '../utils/gravatar';

import '../assets/styles/components/BadgeItem.css';

const BadgeItem = ({ name, username, jobTitle, email, contribution }) => {
  return (
    <li className='badgeItem'>
      <img src={gravatar(email)} alt='Gravatar del usuario' />
      <div className='info'>
        <p>
          <b>{name}</b>
        </p>
        <p>{`@${username}`}</p>
        <p>{jobTitle}</p>
        <p>{contribution}</p>
      </div>
    </li>
  );
};

export default BadgeItem;
