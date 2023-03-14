/* eslint-disable import/no-anonymous-default-export */
import store from '../store';
import * as ActionType from './constant';

export default {
  setOverview: (value: any) => {
    const action = { type: ActionType.SET_OVERVIEW, value };
    store.dispatch(action);
  },
  updateOverview: (value: any) => {
    const action = { type: ActionType.UPDATE_OVERVIEW, value };
    store.dispatch(action);
  },
  clearOverview: () => {
    const action = { type: ActionType.CLEAR_OVERVIEW };
    store.dispatch(action);
  },
};
