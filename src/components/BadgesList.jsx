import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../redux';

import BadgeItem from './BadgeItem';

import '../assets/styles/components/BadgesList.css';

const BadgesList = ({ fetchUsers, users, loading }) => {
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <ul className='badgesList'>
      {loading ? (
        <h2>Loading..</h2>
      ) : (
        users.map((item) => {
          // eslint-disable-next-line react/jsx-props-no-spreading
          return <BadgeItem key={item._id} {...item} />;
        })
      )}
    </ul>
  );
};

const mapStateToProps = (state) => {
  return {
    loading: state.loading,
    users: state.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BadgesList);
