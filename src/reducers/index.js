import { combineReducers } from 'redux';
import triviaApi from './triviaApi';
import requestToken from './requestToken';
import alternatives from './alternatives';
import timer from './timer';

const rootReducer = combineReducers({ triviaApi, requestToken, alternatives, timer });

export default rootReducer;
