import { combineReducers } from 'redux';
import clientReducer from './client-reducer';
import searchLayoutReducer from './search-layout-reducer';


var reducers = combineReducers({
    clientState: clientReducer,
    searchLayoutState: searchLayoutReducer
});

export default reducers;
