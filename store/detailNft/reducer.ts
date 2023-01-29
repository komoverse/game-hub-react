import * as ActionType from './constant';

const initState = {};

const initializeState = () => {
  const state = initState;
  return state;
};

const reducer = (state = initializeState(), action: any) => {
  const { type, value } = action;

  switch (type) {
    case ActionType.SET_NFT_DETAIL:
      return value;
    case ActionType.UPDATE_NFT_DETAIL:
      return value;
    case ActionType.CLEAR_NFT_DETAIL:
      return initState;
    default:
      return state;
  }
};

export default reducer;
