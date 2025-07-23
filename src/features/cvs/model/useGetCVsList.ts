import { useQuery } from '@tanstack/react-query';
import { GetCvsDocument } from '../../../graphql/graphql';
import { execute } from '../../../shared/api/execute';

export default function useGetCVsList() {
  return useQuery({
    queryKey: ['cvs'],
    queryFn: () => execute(GetCvsDocument, undefined, { withAuth: true }),
  });
}
