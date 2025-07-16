/* eslint-disable */
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = {
  [_ in K]?: never;
};
export type Incremental<T> =
  | T
  | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
};

export type CvInput = {
  education: Array<Scalars['String']['input']>;
  experience: Array<Scalars['String']['input']>;
  languages: Array<Scalars['String']['input']>;
  skills: Array<Scalars['String']['input']>;
  summary: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type CvType = {
  __typename?: 'CVType';
  education: Array<Scalars['String']['output']>;
  experience: Array<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  languages: Array<Scalars['String']['output']>;
  skills: Array<Scalars['String']['output']>;
  summary: Scalars['String']['output'];
  userId: Scalars['String']['output'];
};

export type DepartmentInput = {
  description: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type DepartmentType = {
  __typename?: 'DepartmentType';
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type LanguageInput = {
  level: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type LanguageType = {
  __typename?: 'LanguageType';
  id: Scalars['ID']['output'];
  level: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type LoginInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type LoginResponse = {
  __typename?: 'LoginResponse';
  accessToken: Scalars['String']['output'];
  user: UserType;
};

export type Mutation = {
  __typename?: 'Mutation';
  createCV: CvType;
  createDepartment: DepartmentType;
  createLanguage: LanguageType;
  createPosition: PositionType;
  createProject: ProjectType;
  createSkill: SkillType;
  createUser: UserType;
  deleteCV: Scalars['Boolean']['output'];
  deleteDepartment: Scalars['Boolean']['output'];
  deleteLanguage: Scalars['Boolean']['output'];
  deletePosition: Scalars['Boolean']['output'];
  deleteProject: Scalars['Boolean']['output'];
  deleteSkill: Scalars['Boolean']['output'];
  deleteUser: Scalars['Boolean']['output'];
  login?: Maybe<LoginResponse>;
  updateCV?: Maybe<CvType>;
  updateDepartment?: Maybe<DepartmentType>;
  updateLanguage?: Maybe<LanguageType>;
  updatePosition?: Maybe<PositionType>;
  updateProject?: Maybe<ProjectType>;
  updateSkill?: Maybe<SkillType>;
  updateUser?: Maybe<UserType>;
};

export type MutationCreateCvArgs = {
  input: CvInput;
};

export type MutationCreateDepartmentArgs = {
  input: DepartmentInput;
};

export type MutationCreateLanguageArgs = {
  input: LanguageInput;
};

export type MutationCreatePositionArgs = {
  input: PositionInput;
};

export type MutationCreateProjectArgs = {
  input: ProjectInput;
};

export type MutationCreateSkillArgs = {
  input: SkillInput;
};

export type MutationCreateUserArgs = {
  input: UserInput;
};

export type MutationDeleteCvArgs = {
  id: Scalars['ID']['input'];
};

export type MutationDeleteDepartmentArgs = {
  id: Scalars['ID']['input'];
};

export type MutationDeleteLanguageArgs = {
  id: Scalars['ID']['input'];
};

export type MutationDeletePositionArgs = {
  id: Scalars['ID']['input'];
};

export type MutationDeleteProjectArgs = {
  id: Scalars['ID']['input'];
};

export type MutationDeleteSkillArgs = {
  id: Scalars['ID']['input'];
};

export type MutationDeleteUserArgs = {
  id: Scalars['ID']['input'];
};

export type MutationLoginArgs = {
  input: LoginInput;
};

export type MutationUpdateCvArgs = {
  id: Scalars['ID']['input'];
  input?: InputMaybe<CvInput>;
};

export type MutationUpdateDepartmentArgs = {
  id: Scalars['ID']['input'];
  input?: InputMaybe<DepartmentInput>;
};

export type MutationUpdateLanguageArgs = {
  id: Scalars['ID']['input'];
  input?: InputMaybe<LanguageInput>;
};

export type MutationUpdatePositionArgs = {
  id: Scalars['ID']['input'];
  input?: InputMaybe<PositionInput>;
};

export type MutationUpdateProjectArgs = {
  id: Scalars['ID']['input'];
  input?: InputMaybe<ProjectInput>;
};

export type MutationUpdateSkillArgs = {
  id: Scalars['ID']['input'];
  input?: InputMaybe<SkillInput>;
};

export type MutationUpdateUserArgs = {
  id: Scalars['ID']['input'];
  input?: InputMaybe<UserInput>;
};

export type PositionInput = {
  description: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type PositionType = {
  __typename?: 'PositionType';
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type ProjectInput = {
  description: Scalars['String']['input'];
  endDate: Scalars['String']['input'];
  members: Array<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  startDate: Scalars['String']['input'];
};

export type ProjectType = {
  __typename?: 'ProjectType';
  description: Scalars['String']['output'];
  endDate: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  members: Array<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  startDate: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  cv?: Maybe<CvType>;
  cvs: Array<CvType>;
  department?: Maybe<DepartmentType>;
  departments: Array<DepartmentType>;
  language?: Maybe<LanguageType>;
  languages: Array<LanguageType>;
  position?: Maybe<PositionType>;
  positions: Array<PositionType>;
  project?: Maybe<ProjectType>;
  projects: Array<ProjectType>;
  skill?: Maybe<SkillType>;
  skills: Array<SkillType>;
  user?: Maybe<UserType>;
  users: Array<UserType>;
};

export type QueryCvArgs = {
  id: Scalars['ID']['input'];
};

export type QueryDepartmentArgs = {
  id: Scalars['ID']['input'];
};

export type QueryLanguageArgs = {
  id: Scalars['ID']['input'];
};

export type QueryPositionArgs = {
  id: Scalars['ID']['input'];
};

export type QueryProjectArgs = {
  id: Scalars['ID']['input'];
};

export type QuerySkillArgs = {
  id: Scalars['ID']['input'];
};

export type QueryUserArgs = {
  id: Scalars['ID']['input'];
};

export type SkillInput = {
  description: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type SkillType = {
  __typename?: 'SkillType';
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type UserInput = {
  departmentId?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  firstName?: InputMaybe<Scalars['String']['input']>;
  languages?: InputMaybe<Array<Scalars['String']['input']>>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  password: Scalars['String']['input'];
  positionId?: InputMaybe<Scalars['String']['input']>;
  skills?: InputMaybe<Array<Scalars['String']['input']>>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type UserType = {
  __typename?: 'UserType';
  departmentId?: Maybe<Scalars['String']['output']>;
  email: Scalars['String']['output'];
  firstName?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  languages?: Maybe<Array<Scalars['String']['output']>>;
  lastName?: Maybe<Scalars['String']['output']>;
  positionId?: Maybe<Scalars['String']['output']>;
  skills?: Maybe<Array<Scalars['String']['output']>>;
  username?: Maybe<Scalars['String']['output']>;
};

export type LoginMutationVariables = Exact<{
  input: LoginInput;
}>;

export type LoginMutation = {
  __typename?: 'Mutation';
  login?: {
    __typename?: 'LoginResponse';
    accessToken: string;
    user: { __typename?: 'UserType'; username?: string | null };
  } | null;
};

export type RegisterMutationVariables = Exact<{
  input: UserInput;
}>;

export type RegisterMutation = {
  __typename?: 'Mutation';
  createUser: { __typename?: 'UserType'; id: string; email: string };
};

export const LoginDocument = gql`
  mutation Login($input: LoginInput!) {
    login(input: $input) {
      accessToken
      user {
        username
      }
    }
  }
` as unknown as DocumentNode<LoginMutation, LoginMutationVariables>;
export const RegisterDocument = gql`
  mutation Register($input: UserInput!) {
    createUser(input: $input) {
      id
      email
    }
  }
` as unknown as DocumentNode<RegisterMutation, RegisterMutationVariables>;
