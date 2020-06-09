import { getToken, getAllTrivia } from '../services/TriviaApi';

export const REQUEST_TRIVIA_API = 'REQUEST_TRIVIA_API';

export const REQUEST_TOKEN = 'REQUEST_TOKEN';

export const REQUEST_TOKEN_SUCESS = 'REQUEST_TOKEN_SUCESS';

export const REQUEST_TRIVIA_API_SUCESS = 'REQUEST_TRIVIA_API_SUCESS';

export const REQUEST_TRIVIA_API_FAILURE = 'REQUEST_TRIVIA_API_FAILURE';


const requestTriviaApi = (token) => ({
  type: REQUEST_TRIVIA_API,
  loading: true,
  token,
});

const requestToken = () => ({
  type: REQUEST_TOKEN,
  loading: true,
});

const requestTokenSucess = (token) => ({
  type: REQUEST_TOKEN_SUCESS,
  loading: true,
  token,
});

const requestTriviaSucess = ({ results }) => ({
  type: REQUEST_TRIVIA_API_SUCESS,
  loading: false,
  data: results,
});

const requestTriviaFailure = (error) => ({
  type: REQUEST_TRIVIA_API_FAILURE,
  loading: false,
  data: error,
});

export function fetchTriviaApi(token) {
  return (dispatch) => {
    dispatch(requestTriviaApi(token));

    return getAllTrivia(token).then(
      (data) => dispatch(requestTriviaSucess(data)),
      (error) => dispatch(requestTriviaFailure(error.message)),
    );
  };
}

export function fetchToken() {
  return (dispatch) => {
    dispatch(requestToken());

    return getToken().then(
      (token) => dispatch(requestTokenSucess(token)),
      (error) => dispatch(requestTriviaFailure(error)));
    };
}
