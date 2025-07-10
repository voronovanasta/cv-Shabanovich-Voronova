import type { TypedDocumentNode } from '@graphql-typed-document-node/core';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export async function execute<TResult, TVariables = {}>(
  query: TypedDocumentNode<TResult, TVariables>,
  variables?: TVariables
) {
  const response = await fetch('http://localhost:3000/api', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/graphql-response+json',
    },
    body: JSON.stringify({
      query: query.loc?.source.body ?? '', // берем строку запроса из AST
      variables,
    }),
  });

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  return response.json() as TResult;
}
