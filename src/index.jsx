import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import './style';
import reducers from './reducers';
import App from './components/App';

const store = createStore(reducers, {
  events: [
    {
      id: 0,
      location: 'USA',
      date: new Date(2017, 12, 31),
    },
    {
      id: 1,
      location: 'USA',
      date: new Date(2018, 3, 31),
    },
  ],
});

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
