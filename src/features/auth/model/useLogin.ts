import { useMutation } from '@tanstack/react-query';
import { LoginDocument, type LoginQuery, type LoginQueryVariables } from '../../../graphql/graphql';
import { execute } from '../../../shared/api/execute';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../model/store/useAuthStore';

export default function useLogin() {
  const setAuth = useAuthStore((state) => state.setAuth);
  const navigate = useNavigate();

  return useMutation<LoginQuery, Error, LoginQueryVariables>({
    mutationFn: (variables: LoginQueryVariables) =>
      execute<LoginQuery, LoginQueryVariables>(LoginDocument, variables),
    onSuccess: (data) => {
      if (data.login?.access_token && data.login?.refresh_token && data.login.user) {
        setAuth({
          token: data.login.access_token,
          refreshToken: data.login.refresh_token,
          user: data.login.user,
        });
      }
      navigate('/users');
    },
    onError: (error: Error) => {
      console.log(error.message);
    },
  });
}
