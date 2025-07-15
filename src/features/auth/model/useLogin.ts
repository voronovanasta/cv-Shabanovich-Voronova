import { useMutation } from '@tanstack/react-query';
import {
  LoginDocument,
  type LoginMutation,
  type LoginMutationVariables,
} from '../../../graphql/graphql';
import { execute } from '../../../graphql/execute';
import { useNavigate } from 'react-router-dom';

import gql from 'graphql-tag';

export const LoginUserMutation = gql`
  mutation Login($input: LoginInput!) {
    login(input: $input) {
      accessToken
      user {
        username
      }
    }
  }
`;

export default function useLogin() {
  const navigate = useNavigate();
  return useMutation<LoginMutation, Error, LoginMutationVariables>({
    mutationFn: (variables: LoginMutationVariables) =>
      execute<LoginMutation, LoginMutationVariables>(LoginDocument, variables),
    onSuccess: (data) => {
      console.log(data);
      if (data.login?.accessToken) {
        console.log(data.login.accessToken);
        localStorage.setItem('accessToken', data.login.accessToken);
      }
      navigate('/users');
    },
    onError: (error: Error) => {
      console.log(error.message);
    },
  });
}
