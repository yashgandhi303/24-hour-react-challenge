import { SET_CURRENT_USER } from '../actionTypes';
import { IUser } from '../types';

export const setCurrentUser = (payload: IUser) => ({
  type: SET_CURRENT_USER,
  payload,
});
