import { useMutation } from '@tanstack/react-query';
import {
  LoginDocument,
  type LoginMutation,
  type LoginMutationVariables,
} from '../../../graphql/graphql';
import { execute } from '../../../shared/api/execute';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../model/store/useAuthStore';

export default function useLogin() {
  const setAuth = useAuthStore((state) => state.setAuth);
  const navigate = useNavigate();

  return useMutation<LoginMutation, Error, LoginMutationVariables>({
    mutationFn: (variables: LoginMutationVariables) =>
      execute<LoginMutation, LoginMutationVariables>(LoginDocument, variables),
    onSuccess: (data) => {
      if (data.login?.accessToken && data.login.user) {
        setAuth({
          token: data.login.accessToken,
          id: data.login.user.id,
          username: data.login.user.username ?? '',
        });
      }
      navigate('/users');
    },
    onError: (error: Error) => {
      console.log(error.message);
    },
  });
}
