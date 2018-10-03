import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import  history  from './helpers/history';
import SearchLayoutContainer from './components/containers/search-layout-container';
import ClientListContainer from './components/containers/client-list-container';
import ClientInfoContainer from './components/containers/client-info-container';
import App from './App';

export default (
  <Router history={history}>
    <Route  path="/" component={App}>



    </Route>
  </Router>
);
