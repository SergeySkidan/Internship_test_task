import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Switch,BrowserRouter, Link } from 'react-router-dom';

import './App.css';

import history  from './helpers/history';
import ClientListContainer from './components/containers/client-list-container';


export default class App extends Component {
render() {
return (
  <Router history={history}>

  <div className="app">

      <main className="main-content">
         <Route path="/" component={ClientListContainer} />
      </main>

      <aside className="sidebar">
          <div id = "demo"></div>
      </aside>

    </div>
</Router>
          );
      }
  }

  function mapStateToProps(state) {
      const { alert } = state;
      return {
          alert
      };
  }

  const connectedApp = connect(mapStateToProps)(App);
  export { connectedApp as App };
