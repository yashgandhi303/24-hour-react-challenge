import { SET_CURRENT_USER } from '../actionTypes';
import { IUser } from '../types';

interface IAction {
  type: typeof SET_CURRENT_USER;
  payload: IUser;
}

const INITIAL_STATE: IUser = {
  name: '',
  email: '',
  phone: '',
  accountId: '',
  verificationCode: null,
  password: '',
};

function userReducer(state = INITIAL_STATE, action: IAction): IUser {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}

export default userReducer;
