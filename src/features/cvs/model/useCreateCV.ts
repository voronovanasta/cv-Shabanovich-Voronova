import { useMutation } from '@tanstack/react-query';
import {
  CreateCvDocument,
  type CreateCvMutation,
  type CreateCvMutationVariables,
} from '../../../graphql/graphql';

import { useNavigate } from 'react-router-dom';
import { execute } from '../../../shared/api/execute';

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
