/* eslint-disable import/no-anonymous-default-export */
import store from '../store';
import * as ActionType from './constant';

export default {
  setSideabar: (value: any) => {
    const action = { type: ActionType.SET_SIDEBAR, value };
    store.dispatch(action);
  },
  updateSidebar: (value: any) => {
    const action = { type: ActionType.UPDATE_SIDEBAR, value };
    store.dispatch(action);
  },
  clearSidebar: () => {
    const action = { type: ActionType.CLEAR_SIDEBAR };
    store.dispatch(action);
  },
};
