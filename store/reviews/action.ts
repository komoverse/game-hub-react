/* eslint-disable import/no-anonymous-default-export */
import store from '../store';
import * as ActionType from './constant';

export default {
  setReviews: (value: any) => {
    const action = { type: ActionType.SET_REVIEWS, value };
    store.dispatch(action);
  },
  updateReviews: (value: any) => {
    const action = { type: ActionType.UPDATE_REVIEWS, value };
    store.dispatch(action);
  },
  clearReviews: () => {
    const action = { type: ActionType.CLEAR_REVIEWS };
    store.dispatch(action);
  },
};
