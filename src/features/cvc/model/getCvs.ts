import { useQuery } from '@tanstack/react-query';
import { GetCVsDocument } from '../../../graphql/graphql';
import { execute } from '../../../graphql/execute';

export default function useCVs() {
  return useQuery({
    queryKey: ['cvs'],
    queryFn: () => execute(GetCVsDocument, undefined, { withAuth: true }),
  });
}
