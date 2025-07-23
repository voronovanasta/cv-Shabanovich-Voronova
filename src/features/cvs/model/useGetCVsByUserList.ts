import { useQuery } from '@tanstack/react-query';
import { GetCVsDocument } from '../../../graphql/graphql';
import { execute } from '../../../shared/api/execute';

export default function useGetCVsByUserList() {
  return useQuery({
    queryKey: ['cvs'],
    queryFn: () => execute(GetCVsDocument, undefined, { withAuth: true }),
  });
}
