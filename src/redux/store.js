/* eslint-disable comma-dangle */
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import userReducer from './users/userReducer';

const store = createStore(userReducer, applyMiddleware(thunk));

export default store;
