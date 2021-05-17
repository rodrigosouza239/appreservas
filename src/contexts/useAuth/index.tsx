import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import {
  clearAccessToken,
  getAccessToken,
  setAccessToken,
} from '../../shared/lib';
import { authServices } from '../../shared/services';
// import Toast from 'react-native-tiny-toast';
import { AxiosError } from 'axios';

interface AuthContextProps {
  loading: boolean;
  isSigned: boolean;
  signIn: (data: any) => void;
  signOut: () => void;
}

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

export function AuthProvider({ children }: AuthProviderProps) {
  const [loading, setLoading] = useState(true);
  const [isSigned, setIsSigned] = useState(false);

  useEffect(() => {
    fetchProfile();
  }, []);

  async function fetchProfile() {
    //verificar se existe um token armazenado
    await getAccessToken().then(async (token) => {
      if (token) {
        //Verificar se o token ainda é valido
        await authServices
          .myProfile()
          .then((resp) => {
            // console.log('user', resp.data);
            setIsSigned(true);
            setLoading(false);
          })
          .catch((err) => {
            // console.log('err', err.response);
            setIsSigned(false);
            setLoading(false);
            clearAccessToken();
          });
      } else {
        setLoading(false);
        setIsSigned(false);
        clearAccessToken();
      }
    });
  }

  async function signIn(data: any) {
    await authServices
      .login(data)
      .then(({ data }) => {
        const { token } = data;
        setAccessToken(token);
        setIsSigned(true);
      })
      .catch((err: AxiosError) => {
        const errors = [];
        errors.push(err.response?.data);
        errors.map((error: any) => {
           alert(error.error)
          // Toast.show(`${error.error}`, { position: Toast.position.TOP });
        });
      });
    setLoading(false);
  }

  async function signOut() {
    await clearAccessToken();
    setLoading(false);
    setIsSigned(false);
  }
  return (
    <AuthContext.Provider value={{ isSigned, loading, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  return context;
}
