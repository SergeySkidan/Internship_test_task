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
  <div className="app">

        <header className="masthead">
        </header>

          <main className="main-content">

                   <li><Link to="/" activeClassName="active">Home</Link></li>
                   <li><Link to="/clients" activeClassName="active">Users</Link></li>


                     <Route path="/">
                       <Route component={SearchLayoutContainer}>

                       </Route>
                     </Route>
                     <Route component={ClientListContainer} />
          </main>

                  <aside className="sidebar">

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
