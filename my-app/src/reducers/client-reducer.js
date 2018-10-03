import * as types from '../actions/action-types';
import _ from 'lodash';

const initialState = {
  clients: []

};

const clientReducer = function(state = initialState, action) {

  switch(action.type) {

    case types.GET_CLIENTS_SUCCESS:
    return Object.assign({}, state, { clients: action.clients });

}

  return state;

}

export default clientReducer;
