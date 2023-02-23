import * as ActionType from './constant';

const initState = {
  visible: false,
  modalType: 'LOGIN',
};

const initializeState = () => {
  const state = initState;
  return state;
};

const reducer = (state = initializeState(), action: any) => {
  const { type, value } = action;

  switch (type) {
    case ActionType.SET_MODAL_AUTH:
      return { ...initState, ...value };
    case ActionType.UPDATE_MODAL_AUTH:
      return value;
    case ActionType.CLEAR_MODAL_AUTH:
      return initState;
    default:
      return state;
  }
};

export default reducer;
