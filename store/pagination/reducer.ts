import * as ActionType from './constant';

const initState = {
  page: 1,
};

const initializeState = () => {
  const state = initState;
  return state;
};

const reducer = (state = initializeState(), action: any) => {
  const { type, value } = action;

  switch (type) {
    case ActionType.SET_PAGINATION:
      return { ...initState, ...value };
    case ActionType.UPDATE_PAGINATION:
      return value;
    case ActionType.CLEAR_PAGINATION:
      return initState;
    default:
      return state;
  }
};

export default reducer;
