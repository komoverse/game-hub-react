import * as ActionType from './constant';

const initState = {};

const initializeState = () => {
  const state = initState;
  return state;
};

const reducer = (state = initializeState(), action: any) => {
  const { type, value } = action;

  switch (type) {
    case ActionType.SET_HISTORY_TRANSACTION:
      return value;
    case ActionType.UPDATE_HISTORY_TRANSACTION:
      return value;
    case ActionType.CLEAR_HISTORY_TRANSACTION:
      return initState;
    default:
      return state;
  }
};

export default reducer;
