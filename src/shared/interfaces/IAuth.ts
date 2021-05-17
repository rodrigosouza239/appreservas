import { IUser } from './IUsers';

export interface IAuth {
  token: string;
  user: IUser;
}

export interface ISignIn {
  email: string;
  password: string;
}
