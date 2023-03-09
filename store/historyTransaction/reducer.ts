import { HistoryTransactionDto } from '@/types/home';
import * as ActionType from './constant';

type ACTIONTYPES = {
  type: string;
  value: HistoryTransactionDto[];
};

const initState = {
  data: [],
  pagination: {},
};

const initializeState = () => {
  const state = initState;
  return state;
};

const reducer = (state = initializeState(), action: ACTIONTYPES) => {
  const { type, value } = action;

  switch (type) {
    case ActionType.SET_HISTORY_TRANSACTION:
      return { ...initState, ...value };
    case ActionType.UPDATE_HISTORY_TRANSACTION:
      return value;
    case ActionType.CLEAR_HISTORY_TRANSACTION:
      return initState;
    default:
      return state;
  }
};

export default reducer;
