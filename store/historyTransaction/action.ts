/* eslint-disable import/no-anonymous-default-export */
import store from '../store';
import * as ActionType from './constant';

export default {
  setHistoryTransaction: (value: any) => {
    const action = { type: ActionType.SET_HISTORY_TRANSACTION, value };
    store.dispatch(action);
  },
  updateHistoryTransaction: (value: any) => {
    const action = { type: ActionType.UPDATE_HISTORY_TRANSACTION, value };
    store.dispatch(action);
  },
  clearHistoryTransaction: () => {
    const action = { type: ActionType.CLEAR_HISTORY_TRANSACTION };
    store.dispatch(action);
  },
};
