import { combineReducers } from 'redux';
import qouteReducer from './qoute';

const rootReducer = combineReducers({
  randomQoute: qouteReducer
});

export default rootReducer;
