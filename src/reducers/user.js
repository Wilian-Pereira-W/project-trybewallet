// Esse reducer será responsável por tratar as informações da pessoa usuária
import { INPUT_EMAIL } from '../actions';

const INITIAL_STATE = {
  email: '',
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case INPUT_EMAIL:
    return {
      ...state, email: action.payload,
    };
  default:
    return state;
  }
};

export default userReducer;
