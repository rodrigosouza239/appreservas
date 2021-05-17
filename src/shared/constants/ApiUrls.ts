import { IUserFilters } from '../interfaces';

const version_API = 'v1';
const urls = {
  auth: {
    login: () => `${version_API}/oauth/token`,
    resetPassword: () => `${version_API}/reset-password`,
    forgotPassword: () => `${version_API}/forgot-password`,
    myProfile: () => `${version_API}/myprofile`,
  },

  users: {
    getListUsers: (filters: IUserFilters) =>
      `${version_API}/users?filters[role]=${filters['role']}&filters[name]=${
        filters['name'] ?? ''
      }&filters[state]=${filters['state'] ?? ''}`,
  },
};
export default urls;
