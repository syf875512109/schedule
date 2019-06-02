import React from 'react';
import ReactDOM from 'react-dom';

import * as serviceWorker from './serviceWorker';

import Todos from './Views/Todos.js' 

import store from './store.js' 

import { Provider } from 'react-redux' 

ReactDOM.render(
  <Provider store={ store } >
    <Todos />
  </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
