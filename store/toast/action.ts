/* eslint-disable import/no-anonymous-default-export */
import store from '../store';
import * as ActionType from './constant';

export default {
  setToast: (value: any) => {
    const action = { type: ActionType.SET_TOAST, value };
    store.dispatch(action);
  },
};
