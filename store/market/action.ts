/* eslint-disable import/no-anonymous-default-export */
import store from '../store';
import * as ActionType from './constants';

export default {
  setFilter: (value: any) => {
    const action = { type: ActionType.SET_FILTER, value };
    store.dispatch(action);
  },
};
