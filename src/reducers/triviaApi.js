import {
  REQUEST_TRIVIA_API,
  REQUEST_TRIVIA_API_SUCESS,
  REQUEST_TRIVIA_API_FAILURE,
} from '../actions';


const INITIAL_STATE = {
  loading: true,
  data: [],
};

export const triviaApi = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case REQUEST_TRIVIA_API:
    return { ...state, loading: action.loading };
  case REQUEST_TRIVIA_API_SUCESS:
    return { ...state, loading: action.loading, data: [...action.data] };
  case REQUEST_TRIVIA_API_FAILURE:
    return { ...state, loading: action.loading, error: action.data };
  default:
    return state;
  }
}
