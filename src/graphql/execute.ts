import type { TypedDocumentNode } from '@graphql-typed-document-node/core';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export async function execute<TResult, TVariables = {}>(
  query: TypedDocumentNode<TResult, TVariables>,
  variables?: TVariables,
  token?: string
) {
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    Accept: 'application/graphql-response+json',
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
  });

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const json = await response.json();

  if (json.errors && json.errors.length > 0) {
    throw new Error(json.errors[0].message);
  }

  return response as TResult;
}
