import React, { Component } from 'react';
import { Link } from 'react-router';

import './client-list.css';

class ClientInfoItem extends React.Component {

  render() {
    const client = this.props.client;
    return (<div className='client-infolist'>
      <img src={this.props.client.general.avatar} alt={this.props.client.general.firstName} className='client__avatar'/>
      <h4 className='client__Name'>{this.props.client.general.firstName} {this.props.client.general.lastName}</h4>

      <div className='client__job'>Job</div>
      <div className='client__job'>title:{this.props.client.job.title}</div>
      <div className='client__job'>company: {this.props.client.job.company}</div>

      <div className='client__job'>Contact</div>
      <div className='client__job'>email: {this.props.client.contact.email}</div>
      <div className='client__job'>phone: {this.props.client.contact.phone}</div>

      <div className='client__job'>Address</div>
      <div className='client__job'>street: {this.props.client.address.street}</div>
      <div className='client__job'>city: {this.props.client.address.city}</div>
      <div className='client__job'>zipCode: {this.props.client.address.zipCode}</div>
      <div className='client__job'>country: {this.props.client.address.country}</div>

    </div>)
  }
}


export default class ClientInfoList extends React.Component {
  render() {
    const clients = this.props.clients;
    const items = clients.map((client) => {
    return <ClientInfoItem id='items' key={client.id} client={client}/>;
    });
    return (<ul>{items}</ul>);
  }
}
