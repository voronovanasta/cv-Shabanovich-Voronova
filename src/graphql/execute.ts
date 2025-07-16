import type { TypedDocumentNode } from '@graphql-typed-document-node/core';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export async function execute<TResult, TVariables = {}>(
  query: TypedDocumentNode<TResult, TVariables>,
  variables?: TVariables,
  token?: string
) {
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
  };

  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  const response = await fetch('http://localhost:3000/api', {
    method: 'POST',
    headers,
    body: JSON.stringify({
      query: query.loc?.source.body ?? '', // берем строку запроса из AST
      variables,
    }),
  }).then((res) => res.json());

  return response?.data as TResult;
}
