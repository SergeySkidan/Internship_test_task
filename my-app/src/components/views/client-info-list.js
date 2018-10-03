import React, { Component } from 'react';
import { Link } from 'react-router';

import './client-list.css';

export default class ClientInfoList extends React.Component {

  render() {
    const client = this.props.client;
    return (<div className='client-infolist'>
      <img src={this.props.client.avatar} alt={this.props.client.firstName} className='client__avatar'/>
      <h4 className='client__Name'>{this.props.client.firstName} {this.props.client.lastName}</h4>

      <div className='client__job'>Job</div>
      <div className='client__job'>title:{this.props.client.title}</div>
      <div className='client__job'>company: {this.props.client.company}</div>

      <div className='client__job'>Contact</div>
      <div className='client__job'>email: {this.props.client.email}</div>
      <div className='client__job'>phone: {this.props.client.phone}</div>

      <div className='client__job'>Address</div>
      <div className='client__job'>street: {this.props.client.street}</div>
      <div className='client__job'>city: {this.props.client.city}</div>
      <div className='client__job'>zipCode: {this.props.client.zipCode}</div>
      <div className='client__job'>country: {this.props.client.country}</div>

    </div>)
  }
}
