export interface IUser {
  id: string;
  secure_id: string;
  name: string;
  email: string;
  phone: string;
  subscribed: string;
  profile_pic: string;
  document_pic: string;
  status: string;
  refusing_justification: string;
  ip: string;
  roles: [
    {
      id: string;
      slug: string;
      name: string;
    }
  ];
  lawyer: {
    id: string;
    secure_id: string;
    user_id: string;
    address_id: 1;
    type: string;
    oab: string;
    address: {
      id: string;
      city: string;
      state: string;
    };
  };
}

export interface IUsers {
  total: number;
  perPage: number;
  page: number;
  lastPage: number;
  data: IUser[];
}

export interface IUserFilters {
  role: 'admins' | 'agent' | 'lawyer' | 'service' | string;
  name: string;
  state: string;
}
