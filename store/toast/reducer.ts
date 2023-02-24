import * as ActionType from './constant';

const initState = {
  display: false,
  message: '',
  type: 'info',
};

const initializeState = () => {
  const state = initState;
  return state;
};

const reducer = (state = initializeState(), action: any) => {
  const { type, value } = action;

  switch (type) {
    case ActionType.SET_TOAST:
      return { ...initState, ...value };
    default:
      return state;
  }
};

export default reducer;
