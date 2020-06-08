import {
  REQUEST_TRIVIA_API,
  REQUEST_TRIVIA_API_SUCESS,
  REQUEST_TRIVIA_API_FAILURE,
  REQUEST_TOKEN,
} from './actions';
import { getToken, getAllTrivia } from '../services/TriviaApi';

const requestTriviaApi = () => ({
  type: REQUEST_TRIVIA_API,
  loading: true,
});

const requestToken = ({ token }) => ({
  type: REQUEST_TOKEN,
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


function fetchTriviaApi() {
  return (dispatch) => {
    dispatch(requestTriviaApi());
    return getToken().then(
      (token) => dispatch(requestToken(token)),
      (error) => dispatch(requestTriviaFailure(error));

      return getAllTrivia(token).then(
        (data) => dispatch(requestTriviaSucess(data)),
        (error) => dispatch(requestTriviaFailure(error.message)),
      );
    );
  };
}
