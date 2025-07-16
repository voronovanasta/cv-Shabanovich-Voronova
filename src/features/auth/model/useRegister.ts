import { useMutation } from '@tanstack/react-query';
import {
  RegisterDocument,
  type RegisterMutation,
  type RegisterMutationVariables,
} from '../../../graphql/graphql';
import { execute } from '../../../graphql/execute';
import { useNavigate } from 'react-router-dom';

export default function useRegister() {
  const navigate = useNavigate();
  return useMutation<RegisterMutation, Error, RegisterMutationVariables>({
    mutationFn: (variables: RegisterMutationVariables) =>
      execute<RegisterMutation, RegisterMutationVariables>(RegisterDocument, variables),
    onSuccess: (data) => {
      console.log(data);
      navigate('auth/login');
    },
    onError: (error: Error) => {
      console.log(error.message);
    },
  });
}
