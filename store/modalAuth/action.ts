/* eslint-disable import/no-anonymous-default-export */
import store from '../store';
import * as ActionType from './constant';

export default {
  setModalAuth: (value: any) => {
    const action = { type: ActionType.SET_MODAL_AUTH, value };
    store.dispatch(action);
  },
  updateModalAuth: (value: any) => {
    const action = { type: ActionType.UPDATE_MODAL_AUTH, value };
    store.dispatch(action);
  },
  clearModalAuth: () => {
    const action = { type: ActionType.CLEAR_MODAL_AUTH };
    store.dispatch(action);
  },
};
