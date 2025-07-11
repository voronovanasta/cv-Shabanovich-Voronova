import { useMutation } from '@tanstack/react-query';
import type { LoginMutation, LoginMutationVariables } from './graphql/graphql';
import { LoginDocument } from './graphql/graphql';
import { execute } from './graphql/execute';

export function useLogin() {
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

export function Login() {
  const loginMutation = useLogin();

  const handleLogin = () => {
    loginMutation.mutate({
      input: {
        username: 'Veronica92',
        password: 'rLkvx2WK11EQxR6',
      },
    });
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>

      {loginMutation.isError && <p>Error: {(loginMutation.error as Error).message}</p>}
      {loginMutation.isSuccess && <p>Welcome, {loginMutation.data.login?.user.username}!</p>}
    </div>
  );
}
