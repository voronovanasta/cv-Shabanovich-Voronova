import { useMutation } from '@tanstack/react-query';
import {
  CreateCvDocument,
  type CreateCvMutation,
  type CreateCvMutationVariables,
} from '../../../graphql/graphql';
import { execute } from '../../../graphql/execute';
import { useNavigate } from 'react-router-dom';

export default function useCreateCV() {
  const navigate = useNavigate();
  return useMutation<CreateCvMutation, Error, CreateCvMutationVariables>({
    mutationFn: (variables: CreateCvMutationVariables) =>
      execute<CreateCvMutation, CreateCvMutationVariables>(CreateCvDocument, variables, {
        withAuth: true,
      }),
    onSuccess: () => {
      navigate('/cvs');
    },
    onError: (error: Error) => {
      console.log(error.message);
    },
  });
}
