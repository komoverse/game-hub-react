import * as ActionType from './constant';
import secureLocalStorage from 'utils/secureLocalStorage';
import { TypeAuthLogin } from '@/types/general';

type ACTIONTYPES = {
  type: string;
  value: TypeAuthLogin;
};

export const STATE_AUTH = 'state_auth';
const initState = {};

const initializeState = () => {
  const auth = secureLocalStorage.getItem(STATE_AUTH);
  let state;
  if (auth) {
    state = auth;
  } else {
    state = initState;
  }

  return state;
};

const reducer = (state = initializeState(), action: ACTIONTYPES) => {
  const { type, value } = action;

  switch (type) {
    case ActionType.SET_AUTH_LOGIN:
      secureLocalStorage.setItem(STATE_AUTH, JSON.stringify(value));
      return value;
    case ActionType.CLEAR_AUTH_LOGIN:
      localStorage.clear();
      return {};
    default:
      return state;
  }
};

export default reducer;
