import { ProfileDto } from '@/types/home';
import * as ActionType from './constants';

type ACTIONTYPES = {
  type: string;
  value: ProfileDto;
};

const initState = {};

const initializeState = () => {
  const state = initState;
  return state;
};

const reducer = (state = typeof initializeState(), action: ACTIONTYPES) => {
  const { type, value } = action;

  switch (type) {
    case ActionType.SET_PROFILE:
      return { ...initState, ...value };
    case ActionType.UPDATE_PROFILE:
      return value;
    case ActionType.CLEAR_PROFILE:
      return initState;
    default:
      return state;
  }
};

export default reducer;
