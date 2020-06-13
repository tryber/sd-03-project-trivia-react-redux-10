import {
  QUESTION_ASWERED,
  CORRECT_ANSWER,
  INCORRECT_ANSWER,
  NEXT_QUESTION
} from '../actions/alternativesActions';

const INITIAL_STATE = {
  loading: true,
  index: 0,
  disable: false,
};

const questionAnswered = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case QUESTION_ASWERED:
      return { ...state, loading: action.loading };
    case CORRECT_ANSWER:
      return { ...state, loading: action.loading, disable: true  };
    case INCORRECT_ANSWER:
      return { ...state, loading: action.loading, disable: true };
    case NEXT_QUESTION:
      return {...state, index: state.index + action.index }
    default:
      return state;
  }
};

export default questionAnswered;
