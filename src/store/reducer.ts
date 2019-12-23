import { combineReducers } from 'redux';
import { actionTypes } from './actions';

function counter(state = 0, action: any) {
  switch (action.type) {
    case actionTypes.INCREMENT:
      return state + 1;
    case actionTypes.DECREMENT:
      return state - 1;
    case actionTypes.RESET:
      return 0;
    default:
      return state;
  }
}

export const rootReducer = combineReducers({ counter });