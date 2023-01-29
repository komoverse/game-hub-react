/* eslint-disable import/no-anonymous-default-export */
import store from '../store';
import * as ActionType from './constant';

export default {
  setDetailNft: (value: any) => {
    const action = { type: ActionType.SET_NFT_DETAIL, value };
    store.dispatch(action);
  },
  updateDetailNft: (value: any) => {
    const action = { type: ActionType.UPDATE_NFT_DETAIL, value };
    store.dispatch(action);
  },
  clearDetailNft: () => {
    const action = { type: ActionType.CLEAR_NFT_DETAIL };
    store.dispatch(action);
  },
};
