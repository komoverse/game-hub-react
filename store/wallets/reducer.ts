import * as ActionType from './constant';

const initState = {};

const initializeState = () => {
  const state = initState;
  return state;
};

const reducer = (state = initializeState(), action: any) => {
  const { type, value } = action;

  switch (type) {
    case ActionType.SET_WALLETS:
      return { ...initState, ...value };
    case ActionType.UPDATE_WALLETS:
      return value;
    case ActionType.CLEAR_WALLETS:
      return initState;
    default:
      return state;
  }
};

export default reducer;
