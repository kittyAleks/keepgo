import {RECEIVE_USERS} from './constans';

export const receiveUsers = users => ({
  type: RECEIVE_USERS,
  payload: users,
});
