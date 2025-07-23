import { useMutation } from '@tanstack/react-query';
import {
  SignupDocument,
  type SignupMutation,
  type SignupMutationVariables,
} from '../../../graphql/graphql';
import { execute } from '../../../shared/api/execute';
import { useNavigate } from 'react-router-dom';

export default function useRegister() {
  const navigate = useNavigate();
  return useMutation<SignupMutation, Error, SignupMutationVariables>({
    mutationFn: (variables: SignupMutationVariables) =>
      execute<SignupMutation, SignupMutationVariables>(SignupDocument, variables),
    onSuccess: () => {
      navigate('auth/login');
    },
    onError: (error: Error) => {
      console.log(error.message);
    },
  });
}
