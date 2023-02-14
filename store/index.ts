import store from './store';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getKeys: () => {
    return Object.keys(store);
  },
  getState: (resource?: string | number) => {
    const state: any = store.getState();
    return resource ? state[resource] : state;
  },
};
