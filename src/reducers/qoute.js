import { GET_QUOTES, SET_BG } from '../actions/types';

const INITIAL_STATE = {
  qoute: [],
  color: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_QUOTES:
      return { ...state, qoute: action.payload };
    case SET_BG:
      return { ...state, color: action.payload };
    default:
      return state;
  }
};
