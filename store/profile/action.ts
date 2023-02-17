/* eslint-disable import/no-anonymous-default-export */
import { ProfileDto } from '@/types/home';
import store from '../store';
import * as ActionType from './constant';

export default {
  setProfile: (value: ProfileDto) => {
    const action = { type: ActionType.SET_PROFILE, value };
    store.dispatch(action);
  },
  updateProfile: (value: ProfileDto) => {
    const action = { type: ActionType.UPDATE_PROFILE, value };
    store.dispatch(action);
  },
  clearProfile: () => {
    const action = { type: ActionType.CLEAR_PROFILE };
    store.dispatch(action);
  },
};
