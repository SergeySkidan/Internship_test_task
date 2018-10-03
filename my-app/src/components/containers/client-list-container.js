import React from 'react';
import { connect } from 'react-redux';
import ClientList from '../views/client-list';
import * as clientApi from '../../api/client-api';
import store from '../../store';
import { loadSearchLayout } from '../../actions/search-layout-actions';

class ClientListContainer extends React.Component{

  componentDidMount = () => {
    clientApi.getClients();
    store.dispatch(loadSearchLayout('clients', 'Client Results'));
  }

  render() {
    return (
      <ClientList clients={this.props.clients}/>
    );
  }
};

const mapStateToProps = function(store) {
  return {
    clients: store.clientState.clients
  };
};

export default connect(mapStateToProps)(ClientListContainer);
