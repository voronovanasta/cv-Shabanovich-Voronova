import { useQuery } from '@tanstack/react-query';
import { GetUserDocument } from '../../../graphql/graphql';
import { execute } from '../../../graphql/execute';

export default function useGetUser() {
  return useQuery({
    queryKey: ['users'],
    queryFn: () => execute(GetUserDocument, undefined, { withAuth: true }),
  });
}
