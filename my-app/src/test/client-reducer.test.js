
import * as types from '../actions/action-types';
import  clientReducer  from '../reducers/client-reducer'
import getClientsSuccess from '../actions/client-actions';

describe("clientReducer", () => {
    it("GET_CLIENTS_SUCCESS", () => {
        const state = {}
        const action = {
            type: getClientsSuccess,
            clients: []
        }
        const results = Object.assign({}, state, { clients: getClientsSuccess });
        expect(results)
            .toEqual({
              type: getClientsSuccess

            })
    })
})
