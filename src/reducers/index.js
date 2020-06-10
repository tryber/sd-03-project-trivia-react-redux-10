import { combineReducers } from 'redux';
import triviaApi from './triviaApi';
import requestToken from './requestToken';

const rootReducer = combineReducers({ triviaApi, requestToken });

export default rootReducer;
