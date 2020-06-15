
import { LOG_INTO } from '../actions/login';

const INITIAL_STATE = {
  isLogged: false,
  name: '',
  emailGravatar: '',
  urlGravatar: 'https://www.gravatar.com/avatar/2d3bf5b67282f5f466e503d7022abcf3',
};

const loginReducer = (state = INITIAL_STATE, action) => {
  console.log('meu state movieReducer : ', state);
  switch (action.type) {
    case LOG_INTO:
      return {
        ...state,
        isLogged: true,
        name: action.name,
        emailGravatar: action.emailGravatar,
        urlGravatar: action.urlGravatar,
      };
    default:
      return state;
  }
};

export default loginReducer;

