import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './client-list.css';
import * as clientApi from '../../api/client-api';


class ClientItem extends React.Component {

onClickFilter(event){
var clientTemp = clientApi.searchClients(this.props.client.lastName);
var client = clientTemp[0];
var viewClient = '<div className =\'client__info\'>';
viewClient += "<table width=\"100%\" cellspacing=\"30\" cellpadding=\"20\">";
viewClient += "<tr> ";
var counter = 0;
for (var key in client) {
      switch (counter) {
      case 0: viewClient += "<td ><img src="+client[key]+" ></td>"; break;
      case 1: viewClient += "<td align=\"left\"><div style=\"font-size: 30px\">"+client[key]; break;
      case 2: viewClient += " "+client[key]+"</div>"; break;
      case 3: viewClient += "<p><div style=\"font-size: 24px\">"+"\n"+client[key]+"</div>"; break;
      case 4: viewClient += "<div style=\"font-size: 24px\">"+"\n"+client[key]+"</div></p>"; break;
      case 5: viewClient += "<div style=\"font-size: 20px\">"+"\nemail: "+client[key]+"</div>"; break;
      case 6: viewClient += "<div style=\"font-size: 20px\">"+"\nphone: "+client[key]+"</div>"; break;
      case 7: viewClient += "<address style=\"font-size: 20px\">"+"\nstreet: "+client[key]+"</address>"; break;
      case 8: viewClient += "<address style=\"font-size: 20px\">"+"\ncity: "+client[key]+"</address>"; break;
      case 9: viewClient += "<address style=\"font-size: 20px\">"+"\nzipCode: "+client[key]+"</address>"; break;
      case 10: viewClient += "<address style=\"font-size: 20px\">"+"\ncountry: "+client[key]+"</address>"; break;
      default:  viewClient += "<div style=\"font-size: 20px\">"+"\n"+client[key]+"</div>"; break;
      }
    counter++;
  }
viewClient += "</td></tr></table></div>"
document.getElementById("demo").innerHTML = viewClient;
}

  render() {
    const client = this.props.client;

    return (
      <button  onClick={(e) => this.onClickFilter(e)} className ="client-list">
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
