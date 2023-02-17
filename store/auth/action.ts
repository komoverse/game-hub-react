/* eslint-disable import/no-anonymous-default-export */
import { TypeAuthLogin } from '@/types/general';
import store from '../store';
import * as ActionType from './constant';

export default {
  setAuthLogin: (value: TypeAuthLogin) => {
    const action = { type: ActionType.SET_AUTH_LOGIN, value };
    store.dispatch(action);
  },
  clearAuthLogin: () => {
    const action = { type: ActionType.CLEAR_AUTH_LOGIN };
    store.dispatch(action);
  },
};
