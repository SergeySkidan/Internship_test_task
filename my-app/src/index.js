import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';


import App from './App';

import './index.css';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={store}>
          <App />
    </Provider>,
  document.getElementById('root'));
registerServiceWorker();
