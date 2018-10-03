import React from 'react';
import { connect } from 'react-redux';
import ClientInfoList from '../views/client-info-list';
import * as clientApi from '../../api/client-api';
import store from '../../store';
import { loadSearchLayout } from '../../actions/search-layout-actions';

class ClientInfoContainer extends React.Component{

  componentDidMount = () => {
    let clientInfo = this.props.params;
  alert(this.props.params);
    clientApi.getInfo(clientInfo);
  }

  render() {
    return (
      <ClientInfoList clients={this.props.clients}/>
    );
  }
};

const mapStateToProps = function(store) {
  return {
    clients: store.clientState.clients
  };
};

export default connect(mapStateToProps)(ClientInfoContainer);
