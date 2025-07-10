import { useQuery } from '@tanstack/react-query';
import { GetDepartmentsDocument } from './graphql/graphql';
import { execute } from './graphql/execute';

import { gql } from 'graphql-tag';

export const GetDepartmentsQuery = gql`
  query getDepartments {
    departments {
      id
      name
    }
  }
`;

export function Example() {
  const { data } = useQuery({
    queryKey: ['departments'],
    queryFn: () => execute(GetDepartmentsDocument),
  });

  console.log(data);

  return <div>hhhhhh</div>;
}
