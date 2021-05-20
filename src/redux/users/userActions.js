import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
  USER_INPUT,
} from './userTypes';

import apiUrl from '../../config';

export const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST,
  };
};

export const fetchUsersSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users,
  };
};

export const fetchUsersFailure = (error) => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error,
  };
};

export const fetchUsers = () => {
  return (dispatch) => {
    dispatch(fetchUsersRequest());
    fetch(apiUrl)
      .then(async (response) => {
        // response.data is the users
        const data = await response.json();
        dispatch(fetchUsersSuccess(data.body));
      })
      .catch((error) => {
        // error.message is the error message
        dispatch(fetchUsersFailure(error.message));
      });
  };
};

export const postUser = (data) => {
  return (dispatch) => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    };
    fetch(apiUrl, requestOptions)
      .then(async (response) => {
        // response.data is the users
        const data = await response.json();
        dispatch(fetchUsersSuccess(data.body));
      })
      .catch((error) => {
        // error.message is the error message
        dispatch(fetchUsersFailure(error.message));
      });
  };
};

export const userInput = (user) => {
  return {
    type: USER_INPUT,
    payload: user,
  };
};
