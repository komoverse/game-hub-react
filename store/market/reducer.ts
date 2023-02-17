import * as ActionType from './constants';

const initState = {};

const initializeState = () => {
  const state = initState;
  return state;
};

const reducer = (state = initializeState(), action: any) => {
  const { type, value } = action;

  switch (type) {
    case ActionType.SET_FILTER:
      return { ...initState, value };
    default:
      return state;
  }
};

export default reducer;
