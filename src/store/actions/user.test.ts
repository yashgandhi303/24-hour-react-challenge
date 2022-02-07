import { setCurrentUser } from './user';
import { SET_CURRENT_USER } from '../actionTypes';

describe('setCurrentUserAction', () => {
  it('should a type and a payload', () => {
    const data = {
      name: 'Jane',
      email: 'janedoe@gmail.com',
      phone: '+123456789',
      accountId: 'jane.near',
      password: 'abcd123',
      verificationCode: 111111,
    };

    expect(setCurrentUser(data)).toEqual({
      type: SET_CURRENT_USER,
      payload: data,
    });
  });
});
