/* eslint-disable */
import * as types from './graphql';
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "mutation Login($input: LoginInput!) {\n  login(input: $input) {\n    accessToken\n    user {\n      username\n    }\n  }\n}": typeof types.LoginDocument,
    "mutation Register($input: UserInput!) {\n  createUser(input: $input) {\n    id\n    email\n  }\n}": typeof types.RegisterDocument,
    "query getUsers {\n  users {\n    id\n    username\n    email\n    firstName\n    lastName\n    departmentId\n    positionId\n    languages\n    skills\n  }\n}": typeof types.GetUsersDocument,
};
const documents: Documents = {
    "mutation Login($input: LoginInput!) {\n  login(input: $input) {\n    accessToken\n    user {\n      username\n    }\n  }\n}": types.LoginDocument,
    "mutation Register($input: UserInput!) {\n  createUser(input: $input) {\n    id\n    email\n  }\n}": types.RegisterDocument,
    "query getUsers {\n  users {\n    id\n    username\n    email\n    firstName\n    lastName\n    departmentId\n    positionId\n    languages\n    skills\n  }\n}": types.GetUsersDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation Login($input: LoginInput!) {\n  login(input: $input) {\n    accessToken\n    user {\n      username\n    }\n  }\n}"): (typeof documents)["mutation Login($input: LoginInput!) {\n  login(input: $input) {\n    accessToken\n    user {\n      username\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation Register($input: UserInput!) {\n  createUser(input: $input) {\n    id\n    email\n  }\n}"): (typeof documents)["mutation Register($input: UserInput!) {\n  createUser(input: $input) {\n    id\n    email\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query getUsers {\n  users {\n    id\n    username\n    email\n    firstName\n    lastName\n    departmentId\n    positionId\n    languages\n    skills\n  }\n}"): (typeof documents)["query getUsers {\n  users {\n    id\n    username\n    email\n    firstName\n    lastName\n    departmentId\n    positionId\n    languages\n    skills\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;