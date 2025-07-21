import { useMutation } from '@tanstack/react-query';
import {
  UpdateUserDocument,
  type UpdateUserMutation,
  type UpdateUserMutationVariables,
} from '../../../graphql/graphql';
import { execute } from '../../../graphql/execute';

export default function useUpdateUser() {
  return useMutation<UpdateUserMutation, Error, UpdateUserMutationVariables>({
    mutationFn: (variables: UpdateUserMutationVariables) =>
      execute<UpdateUserMutation, UpdateUserMutationVariables>(UpdateUserDocument, variables, {
        withAuth: true,
      }),
    onSuccess: (data) => {
      console.log(data.updateUser);
    },
    onError: (error: Error) => {
      console.log(error.message);
    },
  });
}
