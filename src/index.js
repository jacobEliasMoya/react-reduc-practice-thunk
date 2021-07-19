import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {store} from './app/store.js'

ReactDOM.render(
  <React.StrictMode>
    <App
      state={store.getState()}
    />
  </React.StrictMode>,
  document.getElementById('root')
);

