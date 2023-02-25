import * as ActionType from './constant';
import { ListReviewsDto } from '@/types/game';

type ACTIONTYPES = {
  type: string;
  value: ListReviewsDto[];
};

const initState = {};

const initializeState = () => {
  const state = initState;
  return state;
};

const reducer = (state = typeof initializeState(), action: ACTIONTYPES) => {
  const { type, value } = action;

  switch (type) {
    case ActionType.SET_REVIEWS:
      return value;
    case ActionType.UPDATE_REVIEWS:
      return value;
    case ActionType.CLEAR_REVIEWS:
      return initState;
    default:
      return state;
  }
};

export default reducer;
