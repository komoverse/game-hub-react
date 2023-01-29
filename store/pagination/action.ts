/* eslint-disable import/no-anonymous-default-export */
import store from '../store';
import * as ActionType from './constant';

export default {
  setPagination: (value: any) => {
    const action = { type: ActionType.SET_PAGINATION, value };
    store.dispatch(action);
  },
  updatePagination: (value: any) => {
    const action = { type: ActionType.UPDATE_PAGINATION, value };
    store.dispatch(action);
  },
  clearPagination: () => {
    const action = { type: ActionType.CLEAR_PAGINATION };
    store.dispatch(action);
  },
};
