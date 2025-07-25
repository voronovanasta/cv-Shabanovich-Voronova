import { useMutation } from '@tanstack/react-query';
import {
  UpdateCvDocument,
  type UpdateCvMutation,
  type UpdateCvMutationVariables,
} from '../../../graphql/graphql';
import { useNavigate } from 'react-router-dom';
import { execute } from '../../../shared/api/execute';

export default function useUpdateCV() {
  const navigate = useNavigate();
  return useMutation<UpdateCvMutation, Error, UpdateCvMutationVariables>({
    mutationFn: (variables: UpdateCvMutationVariables) =>
      execute<UpdateCvMutation, UpdateCvMutationVariables>(UpdateCvDocument, variables, {
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
