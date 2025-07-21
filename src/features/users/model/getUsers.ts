import { useQuery } from '@tanstack/react-query';
import { GetUsersDocument } from '../../../graphql/graphql';
import { execute } from '../../../graphql/execute';

export default function useGetUsers() {
  const token = localStorage.getItem('accessToken');
  if (!token) throw new Error('Access token is missing from localStorage');
  return useQuery({
    queryKey: ['users'],
    queryFn: () => execute(GetUsersDocument, undefined, { withAuth: true }),
  });
}
