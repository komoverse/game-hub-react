import * as ActionType from './constant';

const initState = {
  code: 'id',
  list: [
    { code: 'eng', text: 'English' },
    { code: 'id', text: 'Indonesia' },
  ],
};

const reducer = (state = initState, action: any) => {
  const { type, value } = action;

  switch (type) {
    case ActionType.LANGUAGE_SET:
      return { ...state, code: value };
    default:
      return state;
  }
};

export default reducer;
