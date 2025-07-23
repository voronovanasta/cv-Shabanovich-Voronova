import { useMutation } from '@tanstack/react-query';
import {
  DeleteCvDocument,
  type DeleteCvMutation,
  type DeleteCvMutationVariables,
} from '../../../graphql/graphql';
import { execute } from '../../../graphql/execute';
import { useNavigate } from 'react-router-dom';

export default function useDeleteCV() {
  const navigate = useNavigate();
  return useMutation<DeleteCvMutation, Error, DeleteCvMutationVariables>({
    mutationFn: (variables: DeleteCvMutationVariables) =>
      execute<DeleteCvMutation, DeleteCvMutationVariables>(DeleteCvDocument, variables, {
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
