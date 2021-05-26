import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { userInput, postUser } from '../redux/users/userActions';
import Button from './Button';

import '../assets/styles/components/NewBadge.css';

const NewBadge = (props) => {
  const [form, setForm] = useState({});
  const history = useHistory();

  const handleChange = (e) => {
    const newForm = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setForm(newForm);
    props.userInput(newForm);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.postUser(form);
    history.push('/');
  };

  return (
    <section className='newBadge'>
      <p>New Attendant</p>
      <form onSubmit={handleSubmit}>
        <input
          name='name'
          type='name'
          placeholder='Name'
          onChange={handleChange}
          required
        />
        <input
          name='email'
          type='email'
          placeholder='Si tienes gravatar ingresa tu email'
          onChange={handleChange}
        />
        <input
          name='jobTitle'
          type='text'
          placeholder='Job title'
          onChange={handleChange}
          required
        />
        <input
          name='twitter'
          type='text'
          placeholder='Twitter'
          onChange={handleChange}
        />
        <Button text='Save' className='button' condition='submit' />
      </form>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    input: state.input,
  };
};

const mapDispatchToProps = {
  userInput,
  postUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(NewBadge);
