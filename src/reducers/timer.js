import {
  START_TIMER,
  CHANGE_TIMER,
  RESET_TIMER,
} from '../actions/timerActions';

const INITIAL_STATE = {
  time: 30,
  id: null,
};

const timerRunning = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case START_TIMER:
      return { ...state, id: action.id };
    case CHANGE_TIMER:
      return { ...state, time: (state.time - 1) };
    case RESET_TIMER:
      return { ...state, time: 30, id: null };
    default:
      return state;
  }
};

export default timerRunning;
