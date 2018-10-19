
import React from 'react';
import { connect } from 'react-redux';
import ClientList from '../views/client-list';
import * as clientApi from '../../api/client-api';
import store from '../../store';
import { Switch, BrowserRouter, Link } from 'react-router-dom';


import './client-list-container.css';

class ClientListContainer extends React.Component{
  constructor(props) {
      super(props);
      this.state = {value: ''};
      this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({value: event.target.value});
    }

  render() {
    return (
      <div className='client_list_container'>

      <div><input type="text" value={this.state.value} onChange={this.handleChange} placeholder="Search" className ="input__client"/></div>

      <ClientList clients={clientApi.searchClients(this.state.value)}/>

      </div>
    );
  }
};

const mapStateToProps = function(store) {
  return {
    clients: store.clientState.clients
  };
};

export default connect(mapStateToProps)(ClientListContainer);
