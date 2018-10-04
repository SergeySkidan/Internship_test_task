import React from 'react';
import { connect } from 'react-redux';
import ClientList from '../views/client-list';
import * as clientApi from '../../api/client-api';
import store from '../../store';
import { Switch, BrowserRouter, Link } from 'react-router-dom';

class ClientListContainer extends React.Component{
  constructor(props) {
      super(props);
      this.state = {value: ''};
      this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({value: event.target.value});
    }


  // componentDidMount = () => {
  //   clientApi.searchClients("")
  //   store.dispatch(loadSearchLayout('clients', 'Client Results'));
  // }



  render() {
    return (
      <div>

      <a><input type="text" value={this.state.value} onChange={this.handleChange} placeholder="Search"/></a>

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
