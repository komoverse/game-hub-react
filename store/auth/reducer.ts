import * as ActionType from './constant';
import secureLocalStorage from 'utils/secureLocalStorage';

const STORAGE = 'state_auth';
const initState = {};

const initializeState = () => {
  const auth = secureLocalStorage.getItem(STORAGE);
  let state;
  if (auth) {
    state = auth;
  } else {
    state = initState;
  }

  return state;
};

const reducer = (state = initializeState(), action: any) => {
  const { type, value } = action;

  switch (type) {
    case ActionType.SET_AUTH_LOGIN:
      secureLocalStorage.setItem(STORAGE, JSON.stringify(value));
      return value;
    case ActionType.CLEAR_AUTH_LOGIN:
      localStorage.clear();
      return {};
    default:
      return state;
  }
};

export default reducer;
