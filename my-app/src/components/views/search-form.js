import React from 'react';


class SearchForm extends React.Component{

  getQuery =()=> {
    return this.refs.search.value;
  }

  render() {
    return (
      <div>
      <form onSubmit={this.props.search} className="search">
        <input type="text"   ref="search" placeholder="Search" />

        <button>Search</button>

      </form>
      </div>
    );
  }

};


export default SearchForm;
