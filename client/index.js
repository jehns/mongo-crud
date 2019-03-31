import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './reducers';
import Main from './components/Main.js';

// import '../public/index.css';


ReactDOM.render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.getElementById('app') // make sure this is the same as the id of the div in your index.html
);
