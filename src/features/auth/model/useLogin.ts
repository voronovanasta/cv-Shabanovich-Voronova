import { useMutation } from '@tanstack/react-query';
import {
  LoginDocument,
  type LoginMutation,
  type LoginMutationVariables,
} from '../../../graphql/graphql';
import { execute } from '../../../graphql/execute';

export default function useLogin() {
  return useMutation<LoginMutation, Error, LoginMutationVariables>({
    mutationFn: (variables: LoginMutationVariables) =>
      execute<LoginMutation, LoginMutationVariables>(LoginDocument, variables),
    onSuccess: (data) => {
      if (data.login?.accessToken) {
        localStorage.setItem('accessToken', data.login.accessToken);
      }
    },
  });
}
