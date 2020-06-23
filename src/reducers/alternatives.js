import {
  QUESTION_ASWERED,
  CORRECT_ANSWER,
  INCORRECT_ANSWER,
  NEXT_QUESTION,
  RESET_REDUCER,
} from '../actions/alternativesActions';

const INITIAL_STATE = {
  loading: true,
  index: 0,
  disable: false,
  score: 0,
};

const questionAnswered = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case QUESTION_ASWERED:
      return { ...state, loading: action.loading };
    case CORRECT_ANSWER:
      return {
        ...state,
        loading: action.loading,
        disable: true,
        score: state.score + action.score,
      };
    case INCORRECT_ANSWER:
      return { ...state, loading: action.loading, disable: true };
    case NEXT_QUESTION:
      return { ...state, index: state.index + action.index, disable: false };
    case RESET_REDUCER:
      return { ...state, index: 0, disable: false, score: 0 };
    default:
      return state;
  }
};

export default questionAnswered;
