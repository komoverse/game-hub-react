import * as ActionType from './constant';

const initState = {
  display: false,
  modalType: 'INITIAL',
};

const initializeState = () => {
  const state = initState;
  return state;
};

const reducer = (state = initializeState(), action: any) => {
  const { type, value } = action;

  switch (type) {
    case ActionType.SET_MODAL_WALLET:
      return { ...initState, ...value };
    case ActionType.UPDATE_MODAL_WALLET:
      return value;
    case ActionType.CLEAR_MODAL_WALLET:
      return initState;
    default:
      return state;
  }
};

export default reducer;
