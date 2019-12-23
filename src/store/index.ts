import { createStore } from 'redux';
import { rootReducer } from './reducer';

export interface IAppState {
  counter: number;
}

export const store = createStore(rootReducer);