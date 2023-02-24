/* eslint-disable import/no-anonymous-default-export */
import store from '../store';
import * as ActionType from './constant';

export default {
  setModalWallet: (value: any) => {
    const action = { type: ActionType.SET_MODAL_WALLET, value };
    store.dispatch(action);
  },
  updateModalWallet: (value: any) => {
    const action = { type: ActionType.UPDATE_MODAL_WALLET, value };
    store.dispatch(action);
  },
  clearModalWallet: () => {
    const action = { type: ActionType.CLEAR_MODAL_WALLET };
    store.dispatch(action);
  },
};
