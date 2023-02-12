/* eslint-disable import/no-anonymous-default-export */
import store from '../store';
import * as ActionType from './constant';

export default {
  setWallets: (value: any) => {
    const action = { type: ActionType.SET_WALLETS, value };
    store.dispatch(action);
  },
  updateWallets: (value: any) => {
    const action = { type: ActionType.UPDATE_WALLETS, value };
    store.dispatch(action);
  },
  clearWallets: () => {
    const action = { type: ActionType.CLEAR_WALLETS };
    store.dispatch(action);
  },
};
