import { useMutation, useQuery } from '@tanstack/react-query';
import { GetDepartmentsDocument } from './graphql/graphql';
import { execute } from './graphql/execute';

import { gql } from 'graphql-tag';
import { useLogin } from './login';

export const GetDepartmentsQuery = gql`
  query getDepartments {
    departments {
      id
      name
    }
  }
`;

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

export function Example() {
  // const { mutate} = useLogin();
  // const token = localStorage.getItem('accessToken');
  // if (token) {
  //   const { data } = useQuery({
  //     queryKey: ['departments'],
  //     queryFn: () => execute(GetDepartmentsDocument, localStorage.getItem('accessToken')),
  //   });
  // }
  // console.log(data);

  return <div>Example</div>;
}
