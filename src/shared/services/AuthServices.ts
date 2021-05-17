import { ApiUrls } from '../constants';
import { IAuth, IUser } from '../interfaces';
import Http from '../lib/Http';

class AuthServices {
  async login(dataUser: any): Promise<IAuth | any> {
    return await Http.post(ApiUrls.auth.login(), dataUser);
  }
  async myProfile(): Promise<IAuth | any> {
    return await Http.get(ApiUrls.auth.myProfile());
  }
}

export const authServices = new AuthServices();
