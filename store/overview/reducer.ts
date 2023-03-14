import * as ActionType from './constant';
import { OverviewDto } from '@/types/game';

type ACTIONTYPES = {
  type: string;
  value: OverviewDto;
};

const initState = {};

const initializeState = () => {
  const state = initState;
  return state;
};

const reducer = (state = typeof initializeState(), action: ACTIONTYPES) => {
  const { type, value } = action;

  switch (type) {
    case ActionType.SET_OVERVIEW:
      return value;
    case ActionType.UPDATE_OVERVIEW:
      return value;
    case ActionType.CLEAR_OVERVIEW:
      return initState;
    default:
      return state;
  }
};

export default reducer;
