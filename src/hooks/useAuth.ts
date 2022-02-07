import { IState } from '@store/types';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentUser } from '@store/actions/user';
import { useRouter } from 'next/router';

export function useAuth() {
  const user = useSelector((state: IState) => state.user);
  const dispatch = useDispatch();
  const router = useRouter();

  const register = (key: 'email' | 'phone', value: string) => {
    const randomCode = Math.floor(Math.random() * 1000000);

    dispatch(
      setCurrentUser({
        ...user,
        [key]: value,
        verificationCode: randomCode,
      }),
    );

    router.push('/verification');
  };

  const verify = (code: string) => {
    const verificationCode = user?.verificationCode;

    if (!verificationCode) {
      return;
    }

    if (verificationCode?.toString() !== code) {
      return;
    }

    dispatch(
      setCurrentUser({
        ...user,
        verificationCode: null,
      }),
    );

    router.push('/create-account');
  };

  const createAccount = (name: string, accountId: string) => {
    if (!name || !accountId) {
      return;
    }

    dispatch(
      setCurrentUser({
        ...user,
        name,
        accountId,
      }),
    );

    router.push('/secure-account');
  };

  const secureAccount = (password: string) => {
    if (!password) {
      return;
    }

    dispatch(
      setCurrentUser({
        ...user,
        password,
      }),
    );

    router.push('/');
  };

  return {
    register,
    verify,
    createAccount,
    secureAccount,
  };
}
