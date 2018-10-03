import React from 'react';
import * as clientApi from '../../api/client-api';
import { loadSearchLayout } from '../../actions/search-layout-actions';
import SearchForm from '../views/search-form';
//import filterUsers from '../layouts/main-layout'

class SearchFormContainer extends React.Component{

  search = (event) => {
    event.preventDefault();
    let query = this.refs.child.getQuery();
    clientApi.searchClients(query);
  }

  render() {
    return (
      <SearchForm search={this.search} ref="child" />
    );
  }
};

export default SearchFormContainer;
