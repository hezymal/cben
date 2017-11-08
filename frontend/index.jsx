import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import App from './components/App';

const store = createStore(reducers, {
  events: [
    {
      id: 0,
      location: 'USA',
      date: new Date(2017, 12, 31),
      fights: [
        {
          id: 0,
          red: {
            id: 0,
            name: 'Hi-Tech',
          },
          blue: {
            id: 1,
            name: 'Rigo',
          },
        },
        {
          id: 1,
          red: {
            id: 2,
            name: 'GGG',
          },
          blue: {
            id: 3,
            name: 'Canelo',
          },
        },
      ],
    },
    {
      id: 1,
      location: 'USA',
      date: new Date(2018, 3, 31),
      fights: [
        {
          id: 0,
          red: {
            id: 0,
            name: 'Hi-Tech',
          },
          blue: {
            id: 1,
            name: 'Rigo',
          },
        },
        {
          id: 1,
          red: {
            id: 2,
            name: 'GGG',
          },
          blue: {
            id: 3,
            name: 'Canelo',
          },
        },
      ],
    },
  ],
});

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
