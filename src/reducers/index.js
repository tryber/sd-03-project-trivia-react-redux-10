import { combineReducers } from 'redux';
import triviaApi from './triviaApi';
import requestToken from './requestToken';
import alternatives from './alternatives';
import timer from './timer';
import loginReducer from './login';

const rootReducer = combineReducers({ triviaApi, requestToken, alternatives, timer, loginReducer });

export default rootReducer;
