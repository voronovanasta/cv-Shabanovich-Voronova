import type { TypedDocumentNode } from '@graphql-typed-document-node/core';
import { useAuthStore } from '../../features/auth/model/store/useAuthStore';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export async function execute<TResult, TVariables = {}>(
  query: TypedDocumentNode<TResult, TVariables>,
  variables?: TVariables,
  options?: { withAuth?: boolean }
) {
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
  };

  if (options?.withAuth) {
    const token = useAuthStore.getState().accessToken;
    headers['Authorization'] = `Bearer ${token}`;
  }

  const response = await fetch('https://cv-project-js.inno.ws/api/graphql', {
    method: 'POST',
    headers,
    body: JSON.stringify({
      query: query.loc?.source.body ?? '',
      variables,
    }),
  }).then((res) => res.json());

  return response?.data as TResult;
}
