
import { connectRouter } from 'connected-react-router';

import { combineReducers } from 'redux';
import history from '../../history';
import universities from './universities';
import loading from './loading';
let reducers = {
    router: connectRouter(history),
    universities,
    loading
}
let combinedReducer =combineReducers(reducers) ;
export default combinedReducer;
