import * as types from '../actions/action-types';
export function getClientsSuccess(clients) {
  return {
    type: types.GET_CLIENTS_SUCCESS,
    clients
  };
}