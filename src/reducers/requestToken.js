import {
  REQUEST_TOKEN,
  REQUEST_TOKEN_SUCESS,
  REQUEST_TOKEN_FAILURE,
} from '../actions';

const INITIAL_STATE = {
  loading: true,
  token: {},
};

export const requestToken = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case REQUEST_TOKEN:
    return { ...state, loading: action.loading };
  case REQUEST_TOKEN_SUCESS:
    return { ...state, loading: action.loading, token: action.data };
  case REQUEST_TOKEN_FAILURE:
    return { ...state, loading: action.loading, error: action.error };
  default:
    return state;
  }
}
