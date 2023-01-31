import * as ActionType from './constant';

const initState: Array<object> = [];

const initializeState = () => {
  const state = initState;
  return state;
};

const reducer = (state = initializeState(), action: any) => {
  const { type, value } = action;

  switch (type) {
    case ActionType.SET_SIDEBAR:
      return { ...initState, value };
    case ActionType.UPDATE_SIDEBAR:
      return value;
    case ActionType.CLEAR_SIDEBAR:
      return initState;
    default:
      return state;
  }
};

export default reducer;
