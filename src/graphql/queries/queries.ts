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
