import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './routes/App';
import store from './redux/store';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  // eslint-disable-next-line comma-dangle
  document.getElementById('app')
);

//https://codesandbox.io/s/github/reduxjs/redux-essentials-example-app/tree/checkpoint-3-postRequests/?from-embed=&file=/src/features/users/usersSlice.js
