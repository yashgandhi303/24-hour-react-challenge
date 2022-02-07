export interface IUser {
  name: string;
  email: string;
  phone: string;
  accountId: string;
  verificationCode: number;
  password: string;
}

export interface INFT {
  name: string;
  type: 'collectible' | 'transaction';
  user: string;
}
export interface IState {
  counter: number;
  user: IUser;
  nfts: INFT[];
}
