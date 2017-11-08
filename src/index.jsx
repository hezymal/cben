import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import './style';
import reducers from './reducers';
import App from './components/App';

const store = createStore(reducers, {
  empty: {
    text: 'Hello, Guys!',
  },
});

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
