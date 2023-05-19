import {RECEIVE_USERS} from './constans';

const initialState = {
  users: [],
};
export const rootReducer = (state = initialState, action) => {
  console.log('QQQaction', action);
  const {type} = action;
  switch (type) {
    case RECEIVE_USERS:
      return {
        ...state,
        users: action.payload,
      };

    default:
      return state;
  }
};
