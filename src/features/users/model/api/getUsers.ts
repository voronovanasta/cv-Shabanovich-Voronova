import { useQuery } from '@tanstack/react-query';
import { GetUsersDocument } from '../../../../graphql/graphql';
import { execute } from '../../../../shared/api/execute';

export default function useGetUsers() {
  return useQuery({
    queryKey: ['users'],
    queryFn: () => execute(GetUsersDocument, undefined, { withAuth: true }),
  });
}
