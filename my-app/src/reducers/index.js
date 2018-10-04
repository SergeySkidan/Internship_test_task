import { combineReducers } from 'redux';
import clientReducer from './client-reducer';

var reducers = combineReducers({
    clientState: clientReducer
});

export default reducers;
