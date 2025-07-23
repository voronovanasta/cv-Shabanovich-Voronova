import { useQuery } from '@tanstack/react-query';
import { GetUserDocument } from '../../../../graphql/graphql';
import { execute } from '../../../../shared/api/execute';

export default function useGetUser() {
  return useQuery({
    queryKey: ['users'],
    queryFn: () => execute(GetUserDocument, undefined, { withAuth: true }),
  });
}
