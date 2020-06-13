import {
  QUESTION_ASWERED,
  CORRECT_ANSWER,
  INCORRECT_ANSWER,
} from '../actions/alternativesActions';

const INITIAL_STATE = {
  loading: true,
  index: 0,
  notAnswered: true,
};

const questionAnswered = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case QUESTION_ASWERED:
      return {
        ...state,
        loading: action.loading,
        index: state.index + action.index,
        notAnswered: action.notAnswered,
      };
    case CORRECT_ANSWER:
      return { ...state, loading: action.loading, notAnswered: action.notAnswered };
    case INCORRECT_ANSWER:
      return { ...state, loading: action.loading, notAnswered: action.notAnswered };
    default:
      return state;
  }
};

export default questionAnswered;
