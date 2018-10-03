import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './client-list.css';
class ClientItem extends React.Component {


  render() {
    const client = this.props.client;

    return (<Link className='client-list' to={'/clients/' + client.general.lastName}>

      <img src={this.props.client.general.avatar} alt={this.props.client.general.firstName} className='client__avatar'/>
      <h4 className='client__Name'>{this.props.client.general.firstName} {this.props.client.general.lastName}</h4>

      <div className='client__job'>{this.props.client.job.title}</div>
      </Link>

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
