import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './client-list.css';
import * as clientApi from '../../api/client-api';

import ClientInfoList from './client-info-list';

class ClientItem extends React.Component {

 onClickFilter(event){

  var a = this.props.client.lastName
  var client = clientApi.getClients();

  const result = client.filter(client => client.lastName == a );

  var a = result[0];
  var c = '';
  for (var key in a) {
    c += "\n"+a[key];

  }

  document.getElementById("demo").innerHTML = c;
// for (var key in a) {
// alert('key: '+key+' '+ a[key]);
// }
<ClientInfoList clients={a}/>;

}

  render() {
    const client = this.props.client;

    return (<button onClick={(e) => this.onClickFilter(e)} >

      <img src={this.props.client.avatar} alt={this.props.client.firstName} className='client__avatar'/>
      <h4 className='client__Name'>{this.props.client.firstName} {this.props.client.lastName}</h4>

      <div className='client__job'>{this.props.client.title}</div>
      </button>

  )
  }
}

export default class ClientList extends React.Component {
  render() {
    const clients = this.props.clients;
    const items = clients.map((client) => {
    return <ClientItem id='items' key={client.id} client={client}/>;
    });
    return (<ul>{items}</ul>);
  }
}
