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
    "mutation Signup($auth: AuthInput!) {\n  signup(auth: $auth) {\n    access_token\n    refresh_token\n    user {\n      id\n      email\n      is_verified\n      profile {\n        first_name\n        last_name\n      }\n      role\n    }\n  }\n}": typeof types.SignupDocument,
    "query Login($auth: AuthInput!) {\n  login(auth: $auth) {\n    access_token\n    refresh_token\n    user {\n      id\n      profile {\n        full_name\n        avatar\n      }\n    }\n  }\n}": typeof types.LoginDocument,
    "mutation CreateCv($cv: CreateCvInput!) {\n  createCv(cv: $cv) {\n    id\n    created_at\n    name\n    education\n    description\n    user {\n      id\n      email\n    }\n    skills {\n      name\n      categoryId\n      mastery\n    }\n    languages {\n      name\n      proficiency\n    }\n    projects {\n      id\n      name\n      internal_name\n      description\n      domain\n      start_date\n      end_date\n      environment\n      roles\n      responsibilities\n    }\n  }\n}": typeof types.CreateCvDocument,
    "mutation DeleteCv($cv: DeleteCvInput!) {\n  deleteCv(cv: $cv) {\n    affected\n  }\n}": typeof types.DeleteCvDocument,
    "query GetCvs {\n  cvs {\n    id\n    created_at\n    name\n    education\n    description\n  }\n}": typeof types.GetCvsDocument,
    "mutation UpdateUser($user: UpdateUserInput!) {\n  updateUser(user: $user) {\n    id\n    created_at\n    email\n    is_verified\n    role\n    department_name\n    position_name\n    department {\n      id\n      name\n    }\n    position {\n      id\n      name\n    }\n    profile {\n      id\n      first_name\n      last_name\n      avatar\n    }\n    cvs {\n      id\n      name\n      created_at\n    }\n  }\n}": typeof types.UpdateUserDocument,
    "query GetUser($userId: ID!) {\n  user(userId: $userId) {\n    id\n    created_at\n    email\n    is_verified\n    role\n    department_name\n    position_name\n    department {\n      id\n      name\n    }\n    position {\n      id\n      name\n    }\n    profile {\n      id\n      first_name\n      last_name\n      avatar\n    }\n    cvs {\n      id\n      name\n      created_at\n    }\n  }\n}": typeof types.GetUserDocument,
    "query GetUsers {\n  users {\n    id\n    email\n    role\n    profile {\n      id\n      first_name\n      last_name\n      full_name\n      avatar\n    }\n  }\n}": typeof types.GetUsersDocument,
};
const documents: Documents = {
    "mutation Signup($auth: AuthInput!) {\n  signup(auth: $auth) {\n    access_token\n    refresh_token\n    user {\n      id\n      email\n      is_verified\n      profile {\n        first_name\n        last_name\n      }\n      role\n    }\n  }\n}": types.SignupDocument,
    "query Login($auth: AuthInput!) {\n  login(auth: $auth) {\n    access_token\n    refresh_token\n    user {\n      id\n      profile {\n        full_name\n        avatar\n      }\n    }\n  }\n}": types.LoginDocument,
    "mutation CreateCv($cv: CreateCvInput!) {\n  createCv(cv: $cv) {\n    id\n    created_at\n    name\n    education\n    description\n    user {\n      id\n      email\n    }\n    skills {\n      name\n      categoryId\n      mastery\n    }\n    languages {\n      name\n      proficiency\n    }\n    projects {\n      id\n      name\n      internal_name\n      description\n      domain\n      start_date\n      end_date\n      environment\n      roles\n      responsibilities\n    }\n  }\n}": types.CreateCvDocument,
    "mutation DeleteCv($cv: DeleteCvInput!) {\n  deleteCv(cv: $cv) {\n    affected\n  }\n}": types.DeleteCvDocument,
    "query GetCvs {\n  cvs {\n    id\n    created_at\n    name\n    education\n    description\n  }\n}": types.GetCvsDocument,
    "mutation UpdateUser($user: UpdateUserInput!) {\n  updateUser(user: $user) {\n    id\n    created_at\n    email\n    is_verified\n    role\n    department_name\n    position_name\n    department {\n      id\n      name\n    }\n    position {\n      id\n      name\n    }\n    profile {\n      id\n      first_name\n      last_name\n      avatar\n    }\n    cvs {\n      id\n      name\n      created_at\n    }\n  }\n}": types.UpdateUserDocument,
    "query GetUser($userId: ID!) {\n  user(userId: $userId) {\n    id\n    created_at\n    email\n    is_verified\n    role\n    department_name\n    position_name\n    department {\n      id\n      name\n    }\n    position {\n      id\n      name\n    }\n    profile {\n      id\n      first_name\n      last_name\n      avatar\n    }\n    cvs {\n      id\n      name\n      created_at\n    }\n  }\n}": types.GetUserDocument,
    "query GetUsers {\n  users {\n    id\n    email\n    role\n    profile {\n      id\n      first_name\n      last_name\n      full_name\n      avatar\n    }\n  }\n}": types.GetUsersDocument,
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
export function graphql(source: "mutation Signup($auth: AuthInput!) {\n  signup(auth: $auth) {\n    access_token\n    refresh_token\n    user {\n      id\n      email\n      is_verified\n      profile {\n        first_name\n        last_name\n      }\n      role\n    }\n  }\n}"): (typeof documents)["mutation Signup($auth: AuthInput!) {\n  signup(auth: $auth) {\n    access_token\n    refresh_token\n    user {\n      id\n      email\n      is_verified\n      profile {\n        first_name\n        last_name\n      }\n      role\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query Login($auth: AuthInput!) {\n  login(auth: $auth) {\n    access_token\n    refresh_token\n    user {\n      id\n      profile {\n        full_name\n        avatar\n      }\n    }\n  }\n}"): (typeof documents)["query Login($auth: AuthInput!) {\n  login(auth: $auth) {\n    access_token\n    refresh_token\n    user {\n      id\n      profile {\n        full_name\n        avatar\n      }\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CreateCv($cv: CreateCvInput!) {\n  createCv(cv: $cv) {\n    id\n    created_at\n    name\n    education\n    description\n    user {\n      id\n      email\n    }\n    skills {\n      name\n      categoryId\n      mastery\n    }\n    languages {\n      name\n      proficiency\n    }\n    projects {\n      id\n      name\n      internal_name\n      description\n      domain\n      start_date\n      end_date\n      environment\n      roles\n      responsibilities\n    }\n  }\n}"): (typeof documents)["mutation CreateCv($cv: CreateCvInput!) {\n  createCv(cv: $cv) {\n    id\n    created_at\n    name\n    education\n    description\n    user {\n      id\n      email\n    }\n    skills {\n      name\n      categoryId\n      mastery\n    }\n    languages {\n      name\n      proficiency\n    }\n    projects {\n      id\n      name\n      internal_name\n      description\n      domain\n      start_date\n      end_date\n      environment\n      roles\n      responsibilities\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation DeleteCv($cv: DeleteCvInput!) {\n  deleteCv(cv: $cv) {\n    affected\n  }\n}"): (typeof documents)["mutation DeleteCv($cv: DeleteCvInput!) {\n  deleteCv(cv: $cv) {\n    affected\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetCvs {\n  cvs {\n    id\n    created_at\n    name\n    education\n    description\n  }\n}"): (typeof documents)["query GetCvs {\n  cvs {\n    id\n    created_at\n    name\n    education\n    description\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation UpdateUser($user: UpdateUserInput!) {\n  updateUser(user: $user) {\n    id\n    created_at\n    email\n    is_verified\n    role\n    department_name\n    position_name\n    department {\n      id\n      name\n    }\n    position {\n      id\n      name\n    }\n    profile {\n      id\n      first_name\n      last_name\n      avatar\n    }\n    cvs {\n      id\n      name\n      created_at\n    }\n  }\n}"): (typeof documents)["mutation UpdateUser($user: UpdateUserInput!) {\n  updateUser(user: $user) {\n    id\n    created_at\n    email\n    is_verified\n    role\n    department_name\n    position_name\n    department {\n      id\n      name\n    }\n    position {\n      id\n      name\n    }\n    profile {\n      id\n      first_name\n      last_name\n      avatar\n    }\n    cvs {\n      id\n      name\n      created_at\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetUser($userId: ID!) {\n  user(userId: $userId) {\n    id\n    created_at\n    email\n    is_verified\n    role\n    department_name\n    position_name\n    department {\n      id\n      name\n    }\n    position {\n      id\n      name\n    }\n    profile {\n      id\n      first_name\n      last_name\n      avatar\n    }\n    cvs {\n      id\n      name\n      created_at\n    }\n  }\n}"): (typeof documents)["query GetUser($userId: ID!) {\n  user(userId: $userId) {\n    id\n    created_at\n    email\n    is_verified\n    role\n    department_name\n    position_name\n    department {\n      id\n      name\n    }\n    position {\n      id\n      name\n    }\n    profile {\n      id\n      first_name\n      last_name\n      avatar\n    }\n    cvs {\n      id\n      name\n      created_at\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetUsers {\n  users {\n    id\n    email\n    role\n    profile {\n      id\n      first_name\n      last_name\n      full_name\n      avatar\n    }\n  }\n}"): (typeof documents)["query GetUsers {\n  users {\n    id\n    email\n    role\n    profile {\n      id\n      first_name\n      last_name\n      full_name\n      avatar\n    }\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;