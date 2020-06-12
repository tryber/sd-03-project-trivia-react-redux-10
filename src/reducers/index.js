import { combineReducers } from 'redux';
import triviaApi from './triviaApi';
import requestToken from './requestToken';
import alternatives from './alternatives';

const rootReducer = combineReducers({ triviaApi, requestToken, alternatives });

export default rootReducer;
