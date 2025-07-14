import { useMutation } from '@tanstack/react-query';
import {
  LoginDocument,
  type LoginMutation,
  type LoginMutationVariables,
} from '../../../graphql/graphql';
import { execute } from '../../../graphql/execute';
import { useNavigate } from 'react-router-dom';

export default function useLogin() {
  const navigate = useNavigate();
  return useMutation<LoginMutation, Error, LoginMutationVariables>({
    mutationFn: (variables: LoginMutationVariables) =>
      execute<LoginMutation, LoginMutationVariables>(LoginDocument, variables),
    onSuccess: (data) => {
      if (data.login?.accessToken) {
        localStorage.setItem('accessToken', data.login.accessToken);
      }
      navigate('/users');
    },
    onError: (error: Error) => {
      console.log(error.message);
    },
  });
}
