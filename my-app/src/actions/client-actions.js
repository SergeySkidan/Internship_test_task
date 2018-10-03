import * as types from '../actions/action-types';

export function getClientsSuccess(clients) {
  return {
    type: types.GET_CLIENTS_SUCCESS,
    clients
  };
}

export function getInfoSuccess(clientInfo) {
  return {
    type: types.GET_INFO_SUCCESS,
    clientInfo
  };
}
