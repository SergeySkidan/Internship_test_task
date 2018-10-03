import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { Switch,BrowserRouter, Link } from 'react-router-dom';


import './App.css';

import  history  from './helpers/history';
import SearchLayoutContainer from './components/containers/search-layout-container';
import ClientListContainer from './components/containers/client-list-container';
import ClientInfoContainer from './components/containers/client-info-container';



export default class App extends Component {
render() {
return (
  <Router history={history}>

  <div className="app">

        <header className="masthead">
        </header>

          <main className="main-content">

          <Route component={SearchLayoutContainer}>

          </Route>

          <Route component={ClientListContainer} />

          </main>

                  <aside className="sidebar">

                    <div id = "demo"></div>
<Route path='/clients/:lastName' component={ClientInfoContainer}/> 
                  </aside>

                  <aside className="twin">
                  </aside>

                  <aside className="twin">
                  </aside>

                  <footer className="colophon grid">
                  &copy; Скидан Сергей
                  </footer>

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
