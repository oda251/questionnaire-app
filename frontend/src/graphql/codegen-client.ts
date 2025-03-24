import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any; }
};

export type Choice = {
  __typename?: 'Choice';
  choice_text: Scalars['String']['output'];
  created_at: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  question_id: Scalars['ID']['output'];
  updated_at: Scalars['DateTime']['output'];
};

export type CreateChoiceInput = {
  choice_text: Scalars['String']['input'];
};

export type CreateOrganizationInput = {
  description: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type CreateQuestionInput = {
  choices?: InputMaybe<Array<CreateChoiceInput>>;
  is_required: Scalars['Boolean']['input'];
  question_text: Scalars['String']['input'];
  question_type: QuestionType;
};

export type CreateQuestionnaireInput = {
  description: Scalars['String']['input'];
  expiry_date?: InputMaybe<Scalars['DateTime']['input']>;
  is_public: Scalars['Boolean']['input'];
  organization_ids: Array<Scalars['ID']['input']>;
  questions: Array<CreateQuestionInput>;
  title: Scalars['String']['input'];
  user_id: Scalars['ID']['input'];
};

export type CreateRoleInput = {
  description: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type CreateUserInput = {
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  password_hash?: InputMaybe<Scalars['String']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createChoice: Choice;
  createOrganization: Organization;
  createQuestion: Question;
  createQuestionnaire: Questionnaire;
  createRole: Role;
  createUser: User;
  deleteChoice: Scalars['Boolean']['output'];
  deleteOrganization: Scalars['Boolean']['output'];
  deleteQuestion: Scalars['Boolean']['output'];
  deleteQuestionnaire: Scalars['Boolean']['output'];
  deleteRole: Scalars['Boolean']['output'];
  deleteUser: Scalars['Boolean']['output'];
  updateChoice: Choice;
  updateOrganization: Organization;
  updateQuestion: Question;
  updateQuestionnaire: Questionnaire;
  updateRole: Role;
  updateUser: User;
};


export type MutationCreateChoiceArgs = {
  input: CreateChoiceInput;
};


export type MutationCreateOrganizationArgs = {
  input: CreateOrganizationInput;
};


export type MutationCreateQuestionArgs = {
  input: CreateQuestionInput;
};


export type MutationCreateQuestionnaireArgs = {
  input: CreateQuestionnaireInput;
};


export type MutationCreateRoleArgs = {
  input: CreateRoleInput;
};


export type MutationCreateUserArgs = {
  input: CreateUserInput;
};


export type MutationDeleteChoiceArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteOrganizationArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteQuestionArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteQuestionnaireArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteRoleArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteUserArgs = {
  id: Scalars['String']['input'];
};


export type MutationUpdateChoiceArgs = {
  input: UpdateChoiceInput;
};


export type MutationUpdateOrganizationArgs = {
  input: UpdateOrganizationInput;
};


export type MutationUpdateQuestionArgs = {
  input: UpdateQuestionInput;
};


export type MutationUpdateQuestionnaireArgs = {
  input: UpdateQuestionnaireInput;
};


export type MutationUpdateRoleArgs = {
  input: UpdateRoleInput;
};


export type MutationUpdateUserArgs = {
  input: UpdateUserInput;
};

export type Organization = {
  __typename?: 'Organization';
  created_at: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  questionnaires?: Maybe<Array<Questionnaire>>;
  updated_at: Scalars['DateTime']['output'];
  user?: Maybe<Array<User>>;
};

export type Query = {
  __typename?: 'Query';
  choice: Choice;
  choices: Array<Choice>;
  organization: Organization;
  organizations: Array<Organization>;
  question: Question;
  questionnaire: Questionnaire;
  questionnaires: Array<Questionnaire>;
  questionnairesByUserId: Array<Questionnaire>;
  questions: Array<Question>;
  role: Role;
  roles: Array<Role>;
  user: User;
  users: Array<User>;
};


export type QueryChoiceArgs = {
  id: Scalars['String']['input'];
};


export type QueryOrganizationArgs = {
  id: Scalars['String']['input'];
};


export type QueryQuestionArgs = {
  id: Scalars['String']['input'];
};


export type QueryQuestionnaireArgs = {
  id: Scalars['String']['input'];
};


export type QueryQuestionnairesByUserIdArgs = {
  userId: Scalars['String']['input'];
};


export type QueryRoleArgs = {
  id: Scalars['String']['input'];
};


export type QueryUserArgs = {
  id: Scalars['String']['input'];
};

export type Question = {
  __typename?: 'Question';
  choices: Array<Choice>;
  created_at: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  is_required: Scalars['Boolean']['output'];
  question_text: Scalars['String']['output'];
  question_type: QuestionType;
  questionnaire_id: Scalars['ID']['output'];
  updated_at: Scalars['DateTime']['output'];
};

/** The supported question types */
export enum QuestionType {
  FreeText = 'FREE_TEXT',
  MultipleChoice = 'MULTIPLE_CHOICE',
  SingleChoice = 'SINGLE_CHOICE'
}

export type Questionnaire = {
  __typename?: 'Questionnaire';
  access_url: Scalars['String']['output'];
  created_at?: Maybe<Scalars['DateTime']['output']>;
  description: Scalars['String']['output'];
  expiry_date?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  is_public: Scalars['Boolean']['output'];
  organizations?: Maybe<Array<Organization>>;
  questions: Array<Question>;
  title: Scalars['String']['output'];
  updated_at?: Maybe<Scalars['DateTime']['output']>;
  user_id: Scalars['ID']['output'];
};

export type Role = {
  __typename?: 'Role';
  created_at: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  updated_at: Scalars['DateTime']['output'];
  users?: Maybe<Array<User>>;
};

export type UpdateChoiceInput = {
  choice_text?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

export type UpdateOrganizationInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateQuestionInput = {
  id: Scalars['ID']['input'];
  is_required?: InputMaybe<Scalars['Boolean']['input']>;
  question_text?: InputMaybe<Scalars['String']['input']>;
  question_type?: InputMaybe<QuestionType>;
};

export type UpdateQuestionnaireInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  expiry_date?: InputMaybe<Scalars['DateTime']['input']>;
  id: Scalars['ID']['input'];
  is_public?: InputMaybe<Scalars['Boolean']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateRoleInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateUserInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  created_at: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  organizations?: Maybe<Array<Organization>>;
  roles?: Maybe<Array<Role>>;
  updated_at: Scalars['DateTime']['output'];
};

export type GetChoicesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetChoicesQuery = { __typename?: 'Query', choices: Array<{ __typename?: 'Choice', id: string, question_id: string, choice_text: string, created_at: any, updated_at: any }> };

export type GetChoiceQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type GetChoiceQuery = { __typename?: 'Query', choice: { __typename?: 'Choice', id: string, question_id: string, choice_text: string, created_at: any, updated_at: any } };

export type CreateChoiceMutationVariables = Exact<{
  input: CreateChoiceInput;
}>;


export type CreateChoiceMutation = { __typename?: 'Mutation', createChoice: { __typename?: 'Choice', id: string, question_id: string, choice_text: string } };

export type UpdateChoiceMutationVariables = Exact<{
  input: UpdateChoiceInput;
}>;


export type UpdateChoiceMutation = { __typename?: 'Mutation', updateChoice: { __typename?: 'Choice', id: string, question_id: string, choice_text: string } };

export type DeleteChoiceMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type DeleteChoiceMutation = { __typename?: 'Mutation', deleteChoice: boolean };

export type GetOrganizationsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetOrganizationsQuery = { __typename?: 'Query', organizations: Array<{ __typename?: 'Organization', id: string, name: string, description: string, created_at: any, updated_at: any }> };

export type GetOrganizationQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type GetOrganizationQuery = { __typename?: 'Query', organization: { __typename?: 'Organization', id: string, name: string, description: string, created_at: any, updated_at: any } };

export type CreateOrganizationMutationVariables = Exact<{
  input: CreateOrganizationInput;
}>;


export type CreateOrganizationMutation = { __typename?: 'Mutation', createOrganization: { __typename?: 'Organization', id: string, name: string, description: string } };

export type UpdateOrganizationMutationVariables = Exact<{
  input: UpdateOrganizationInput;
}>;


export type UpdateOrganizationMutation = { __typename?: 'Mutation', updateOrganization: { __typename?: 'Organization', id: string, name: string, description: string } };

export type DeleteOrganizationMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type DeleteOrganizationMutation = { __typename?: 'Mutation', deleteOrganization: boolean };

export type GetQuestionsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetQuestionsQuery = { __typename?: 'Query', questions: Array<{ __typename?: 'Question', id: string, questionnaire_id: string, question_text: string, question_type: QuestionType, is_required: boolean, created_at: any, updated_at: any, choices: Array<{ __typename?: 'Choice', id: string, choice_text: string, created_at: any, updated_at: any }> }> };

export type GetQuestionQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type GetQuestionQuery = { __typename?: 'Query', question: { __typename?: 'Question', id: string, questionnaire_id: string, question_text: string, question_type: QuestionType, is_required: boolean, created_at: any, updated_at: any, choices: Array<{ __typename?: 'Choice', id: string, choice_text: string, created_at: any, updated_at: any }> } };

export type CreateQuestionMutationVariables = Exact<{
  input: CreateQuestionInput;
}>;


export type CreateQuestionMutation = { __typename?: 'Mutation', createQuestion: { __typename?: 'Question', id: string, questionnaire_id: string, question_text: string, question_type: QuestionType, is_required: boolean } };

export type UpdateQuestionMutationVariables = Exact<{
  input: UpdateQuestionInput;
}>;


export type UpdateQuestionMutation = { __typename?: 'Mutation', updateQuestion: { __typename?: 'Question', id: string, questionnaire_id: string, question_text: string, question_type: QuestionType, is_required: boolean } };

export type DeleteQuestionMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type DeleteQuestionMutation = { __typename?: 'Mutation', deleteQuestion: boolean };

export type GetQuestionnairesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetQuestionnairesQuery = { __typename?: 'Query', questionnaires: Array<{ __typename?: 'Questionnaire', id: string, user_id: string, title: string, description: string, is_public: boolean, expiry_date?: any | null, created_at?: any | null, updated_at?: any | null, access_url: string, organizations?: Array<{ __typename?: 'Organization', id: string, name: string }> | null, questions: Array<{ __typename?: 'Question', id: string, question_text: string, question_type: QuestionType, is_required: boolean, created_at: any, updated_at: any }> }> };

export type GetQuestionnaireQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type GetQuestionnaireQuery = { __typename?: 'Query', questionnaire: { __typename?: 'Questionnaire', id: string, user_id: string, title: string, description: string, is_public: boolean, expiry_date?: any | null, created_at?: any | null, updated_at?: any | null, access_url: string, organizations?: Array<{ __typename?: 'Organization', id: string, name: string }> | null, questions: Array<{ __typename?: 'Question', id: string, question_text: string, question_type: QuestionType, is_required: boolean, created_at: any, updated_at: any }> } };

export type GetQuestionnairesByUserIdQueryVariables = Exact<{
  user_id: Scalars['String']['input'];
}>;


export type GetQuestionnairesByUserIdQuery = { __typename?: 'Query', questionnairesByUserId: Array<{ __typename?: 'Questionnaire', id: string, user_id: string, title: string, description: string, is_public: boolean, expiry_date?: any | null, created_at?: any | null, updated_at?: any | null, access_url: string, organizations?: Array<{ __typename?: 'Organization', id: string, name: string }> | null, questions: Array<{ __typename?: 'Question', id: string, question_text: string, question_type: QuestionType, is_required: boolean, created_at: any, updated_at: any }> }> };

export type CreateQuestionnaireMutationVariables = Exact<{
  input: CreateQuestionnaireInput;
}>;


export type CreateQuestionnaireMutation = { __typename?: 'Mutation', createQuestionnaire: { __typename?: 'Questionnaire', id: string, user_id: string, title: string, description: string, is_public: boolean, expiry_date?: any | null } };

export type UpdateQuestionnaireMutationVariables = Exact<{
  input: UpdateQuestionnaireInput;
}>;


export type UpdateQuestionnaireMutation = { __typename?: 'Mutation', updateQuestionnaire: { __typename?: 'Questionnaire', id: string, user_id: string, title: string, description: string, is_public: boolean, expiry_date?: any | null } };

export type DeleteQuestionnaireMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type DeleteQuestionnaireMutation = { __typename?: 'Mutation', deleteQuestionnaire: boolean };

export type GetRolesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetRolesQuery = { __typename?: 'Query', roles: Array<{ __typename?: 'Role', id: string, name: string, description: string, created_at: any, updated_at: any }> };

export type GetRoleQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type GetRoleQuery = { __typename?: 'Query', role: { __typename?: 'Role', id: string, name: string, description: string, created_at: any, updated_at: any } };

export type CreateRoleMutationVariables = Exact<{
  input: CreateRoleInput;
}>;


export type CreateRoleMutation = { __typename?: 'Mutation', createRole: { __typename?: 'Role', id: string, name: string, description: string } };

export type UpdateRoleMutationVariables = Exact<{
  input: UpdateRoleInput;
}>;


export type UpdateRoleMutation = { __typename?: 'Mutation', updateRole: { __typename?: 'Role', id: string, name: string, description: string } };

export type DeleteRoleMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type DeleteRoleMutation = { __typename?: 'Mutation', deleteRole: boolean };

export type GetUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUsersQuery = { __typename?: 'Query', users: Array<{ __typename?: 'User', id: string, name: string, email: string, created_at: any, updated_at: any }> };

export type GetUserQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type GetUserQuery = { __typename?: 'Query', user: { __typename?: 'User', id: string, name: string, email: string, created_at: any, updated_at: any } };

export type CreateUserMutationVariables = Exact<{
  input: CreateUserInput;
}>;


export type CreateUserMutation = { __typename?: 'Mutation', createUser: { __typename?: 'User', id: string, name: string, email: string } };

export type UpdateUserMutationVariables = Exact<{
  input: UpdateUserInput;
}>;


export type UpdateUserMutation = { __typename?: 'Mutation', updateUser: { __typename?: 'User', id: string, name: string, email: string } };

export type DeleteUserMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type DeleteUserMutation = { __typename?: 'Mutation', deleteUser: boolean };


export const GetChoicesDocument = gql`
    query GetChoices {
  choices {
    id
    question_id
    choice_text
    created_at
    updated_at
  }
}
    `;

/**
 * __useGetChoicesQuery__
 *
 * To run a query within a React component, call `useGetChoicesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetChoicesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetChoicesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetChoicesQuery(baseOptions?: Apollo.QueryHookOptions<GetChoicesQuery, GetChoicesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetChoicesQuery, GetChoicesQueryVariables>(GetChoicesDocument, options);
      }
export function useGetChoicesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetChoicesQuery, GetChoicesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetChoicesQuery, GetChoicesQueryVariables>(GetChoicesDocument, options);
        }
export function useGetChoicesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetChoicesQuery, GetChoicesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetChoicesQuery, GetChoicesQueryVariables>(GetChoicesDocument, options);
        }
export type GetChoicesQueryHookResult = ReturnType<typeof useGetChoicesQuery>;
export type GetChoicesLazyQueryHookResult = ReturnType<typeof useGetChoicesLazyQuery>;
export type GetChoicesSuspenseQueryHookResult = ReturnType<typeof useGetChoicesSuspenseQuery>;
export type GetChoicesQueryResult = Apollo.QueryResult<GetChoicesQuery, GetChoicesQueryVariables>;
export const GetChoiceDocument = gql`
    query GetChoice($id: String!) {
  choice(id: $id) {
    id
    question_id
    choice_text
    created_at
    updated_at
  }
}
    `;

/**
 * __useGetChoiceQuery__
 *
 * To run a query within a React component, call `useGetChoiceQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetChoiceQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetChoiceQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetChoiceQuery(baseOptions: Apollo.QueryHookOptions<GetChoiceQuery, GetChoiceQueryVariables> & ({ variables: GetChoiceQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetChoiceQuery, GetChoiceQueryVariables>(GetChoiceDocument, options);
      }
export function useGetChoiceLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetChoiceQuery, GetChoiceQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetChoiceQuery, GetChoiceQueryVariables>(GetChoiceDocument, options);
        }
export function useGetChoiceSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetChoiceQuery, GetChoiceQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetChoiceQuery, GetChoiceQueryVariables>(GetChoiceDocument, options);
        }
export type GetChoiceQueryHookResult = ReturnType<typeof useGetChoiceQuery>;
export type GetChoiceLazyQueryHookResult = ReturnType<typeof useGetChoiceLazyQuery>;
export type GetChoiceSuspenseQueryHookResult = ReturnType<typeof useGetChoiceSuspenseQuery>;
export type GetChoiceQueryResult = Apollo.QueryResult<GetChoiceQuery, GetChoiceQueryVariables>;
export const CreateChoiceDocument = gql`
    mutation CreateChoice($input: CreateChoiceInput!) {
  createChoice(input: $input) {
    id
    question_id
    choice_text
  }
}
    `;
export type CreateChoiceMutationFn = Apollo.MutationFunction<CreateChoiceMutation, CreateChoiceMutationVariables>;

/**
 * __useCreateChoiceMutation__
 *
 * To run a mutation, you first call `useCreateChoiceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateChoiceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createChoiceMutation, { data, loading, error }] = useCreateChoiceMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateChoiceMutation(baseOptions?: Apollo.MutationHookOptions<CreateChoiceMutation, CreateChoiceMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateChoiceMutation, CreateChoiceMutationVariables>(CreateChoiceDocument, options);
      }
export type CreateChoiceMutationHookResult = ReturnType<typeof useCreateChoiceMutation>;
export type CreateChoiceMutationResult = Apollo.MutationResult<CreateChoiceMutation>;
export type CreateChoiceMutationOptions = Apollo.BaseMutationOptions<CreateChoiceMutation, CreateChoiceMutationVariables>;
export const UpdateChoiceDocument = gql`
    mutation UpdateChoice($input: UpdateChoiceInput!) {
  updateChoice(input: $input) {
    id
    question_id
    choice_text
  }
}
    `;
export type UpdateChoiceMutationFn = Apollo.MutationFunction<UpdateChoiceMutation, UpdateChoiceMutationVariables>;

/**
 * __useUpdateChoiceMutation__
 *
 * To run a mutation, you first call `useUpdateChoiceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateChoiceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateChoiceMutation, { data, loading, error }] = useUpdateChoiceMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateChoiceMutation(baseOptions?: Apollo.MutationHookOptions<UpdateChoiceMutation, UpdateChoiceMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateChoiceMutation, UpdateChoiceMutationVariables>(UpdateChoiceDocument, options);
      }
export type UpdateChoiceMutationHookResult = ReturnType<typeof useUpdateChoiceMutation>;
export type UpdateChoiceMutationResult = Apollo.MutationResult<UpdateChoiceMutation>;
export type UpdateChoiceMutationOptions = Apollo.BaseMutationOptions<UpdateChoiceMutation, UpdateChoiceMutationVariables>;
export const DeleteChoiceDocument = gql`
    mutation DeleteChoice($id: String!) {
  deleteChoice(id: $id)
}
    `;
export type DeleteChoiceMutationFn = Apollo.MutationFunction<DeleteChoiceMutation, DeleteChoiceMutationVariables>;

/**
 * __useDeleteChoiceMutation__
 *
 * To run a mutation, you first call `useDeleteChoiceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteChoiceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteChoiceMutation, { data, loading, error }] = useDeleteChoiceMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteChoiceMutation(baseOptions?: Apollo.MutationHookOptions<DeleteChoiceMutation, DeleteChoiceMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteChoiceMutation, DeleteChoiceMutationVariables>(DeleteChoiceDocument, options);
      }
export type DeleteChoiceMutationHookResult = ReturnType<typeof useDeleteChoiceMutation>;
export type DeleteChoiceMutationResult = Apollo.MutationResult<DeleteChoiceMutation>;
export type DeleteChoiceMutationOptions = Apollo.BaseMutationOptions<DeleteChoiceMutation, DeleteChoiceMutationVariables>;
export const GetOrganizationsDocument = gql`
    query GetOrganizations {
  organizations {
    id
    name
    description
    created_at
    updated_at
  }
}
    `;

/**
 * __useGetOrganizationsQuery__
 *
 * To run a query within a React component, call `useGetOrganizationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOrganizationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOrganizationsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetOrganizationsQuery(baseOptions?: Apollo.QueryHookOptions<GetOrganizationsQuery, GetOrganizationsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetOrganizationsQuery, GetOrganizationsQueryVariables>(GetOrganizationsDocument, options);
      }
export function useGetOrganizationsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetOrganizationsQuery, GetOrganizationsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetOrganizationsQuery, GetOrganizationsQueryVariables>(GetOrganizationsDocument, options);
        }
export function useGetOrganizationsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetOrganizationsQuery, GetOrganizationsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetOrganizationsQuery, GetOrganizationsQueryVariables>(GetOrganizationsDocument, options);
        }
export type GetOrganizationsQueryHookResult = ReturnType<typeof useGetOrganizationsQuery>;
export type GetOrganizationsLazyQueryHookResult = ReturnType<typeof useGetOrganizationsLazyQuery>;
export type GetOrganizationsSuspenseQueryHookResult = ReturnType<typeof useGetOrganizationsSuspenseQuery>;
export type GetOrganizationsQueryResult = Apollo.QueryResult<GetOrganizationsQuery, GetOrganizationsQueryVariables>;
export const GetOrganizationDocument = gql`
    query GetOrganization($id: String!) {
  organization(id: $id) {
    id
    name
    description
    created_at
    updated_at
  }
}
    `;

/**
 * __useGetOrganizationQuery__
 *
 * To run a query within a React component, call `useGetOrganizationQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOrganizationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOrganizationQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetOrganizationQuery(baseOptions: Apollo.QueryHookOptions<GetOrganizationQuery, GetOrganizationQueryVariables> & ({ variables: GetOrganizationQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetOrganizationQuery, GetOrganizationQueryVariables>(GetOrganizationDocument, options);
      }
export function useGetOrganizationLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetOrganizationQuery, GetOrganizationQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetOrganizationQuery, GetOrganizationQueryVariables>(GetOrganizationDocument, options);
        }
export function useGetOrganizationSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetOrganizationQuery, GetOrganizationQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetOrganizationQuery, GetOrganizationQueryVariables>(GetOrganizationDocument, options);
        }
export type GetOrganizationQueryHookResult = ReturnType<typeof useGetOrganizationQuery>;
export type GetOrganizationLazyQueryHookResult = ReturnType<typeof useGetOrganizationLazyQuery>;
export type GetOrganizationSuspenseQueryHookResult = ReturnType<typeof useGetOrganizationSuspenseQuery>;
export type GetOrganizationQueryResult = Apollo.QueryResult<GetOrganizationQuery, GetOrganizationQueryVariables>;
export const CreateOrganizationDocument = gql`
    mutation CreateOrganization($input: CreateOrganizationInput!) {
  createOrganization(input: $input) {
    id
    name
    description
  }
}
    `;
export type CreateOrganizationMutationFn = Apollo.MutationFunction<CreateOrganizationMutation, CreateOrganizationMutationVariables>;

/**
 * __useCreateOrganizationMutation__
 *
 * To run a mutation, you first call `useCreateOrganizationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOrganizationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOrganizationMutation, { data, loading, error }] = useCreateOrganizationMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateOrganizationMutation(baseOptions?: Apollo.MutationHookOptions<CreateOrganizationMutation, CreateOrganizationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateOrganizationMutation, CreateOrganizationMutationVariables>(CreateOrganizationDocument, options);
      }
export type CreateOrganizationMutationHookResult = ReturnType<typeof useCreateOrganizationMutation>;
export type CreateOrganizationMutationResult = Apollo.MutationResult<CreateOrganizationMutation>;
export type CreateOrganizationMutationOptions = Apollo.BaseMutationOptions<CreateOrganizationMutation, CreateOrganizationMutationVariables>;
export const UpdateOrganizationDocument = gql`
    mutation UpdateOrganization($input: UpdateOrganizationInput!) {
  updateOrganization(input: $input) {
    id
    name
    description
  }
}
    `;
export type UpdateOrganizationMutationFn = Apollo.MutationFunction<UpdateOrganizationMutation, UpdateOrganizationMutationVariables>;

/**
 * __useUpdateOrganizationMutation__
 *
 * To run a mutation, you first call `useUpdateOrganizationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateOrganizationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateOrganizationMutation, { data, loading, error }] = useUpdateOrganizationMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateOrganizationMutation(baseOptions?: Apollo.MutationHookOptions<UpdateOrganizationMutation, UpdateOrganizationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateOrganizationMutation, UpdateOrganizationMutationVariables>(UpdateOrganizationDocument, options);
      }
export type UpdateOrganizationMutationHookResult = ReturnType<typeof useUpdateOrganizationMutation>;
export type UpdateOrganizationMutationResult = Apollo.MutationResult<UpdateOrganizationMutation>;
export type UpdateOrganizationMutationOptions = Apollo.BaseMutationOptions<UpdateOrganizationMutation, UpdateOrganizationMutationVariables>;
export const DeleteOrganizationDocument = gql`
    mutation DeleteOrganization($id: String!) {
  deleteOrganization(id: $id)
}
    `;
export type DeleteOrganizationMutationFn = Apollo.MutationFunction<DeleteOrganizationMutation, DeleteOrganizationMutationVariables>;

/**
 * __useDeleteOrganizationMutation__
 *
 * To run a mutation, you first call `useDeleteOrganizationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteOrganizationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteOrganizationMutation, { data, loading, error }] = useDeleteOrganizationMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteOrganizationMutation(baseOptions?: Apollo.MutationHookOptions<DeleteOrganizationMutation, DeleteOrganizationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteOrganizationMutation, DeleteOrganizationMutationVariables>(DeleteOrganizationDocument, options);
      }
export type DeleteOrganizationMutationHookResult = ReturnType<typeof useDeleteOrganizationMutation>;
export type DeleteOrganizationMutationResult = Apollo.MutationResult<DeleteOrganizationMutation>;
export type DeleteOrganizationMutationOptions = Apollo.BaseMutationOptions<DeleteOrganizationMutation, DeleteOrganizationMutationVariables>;
export const GetQuestionsDocument = gql`
    query GetQuestions {
  questions {
    id
    questionnaire_id
    question_text
    question_type
    is_required
    created_at
    updated_at
    choices {
      id
      choice_text
      created_at
      updated_at
    }
  }
}
    `;

/**
 * __useGetQuestionsQuery__
 *
 * To run a query within a React component, call `useGetQuestionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetQuestionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetQuestionsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetQuestionsQuery(baseOptions?: Apollo.QueryHookOptions<GetQuestionsQuery, GetQuestionsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetQuestionsQuery, GetQuestionsQueryVariables>(GetQuestionsDocument, options);
      }
export function useGetQuestionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetQuestionsQuery, GetQuestionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetQuestionsQuery, GetQuestionsQueryVariables>(GetQuestionsDocument, options);
        }
export function useGetQuestionsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetQuestionsQuery, GetQuestionsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetQuestionsQuery, GetQuestionsQueryVariables>(GetQuestionsDocument, options);
        }
export type GetQuestionsQueryHookResult = ReturnType<typeof useGetQuestionsQuery>;
export type GetQuestionsLazyQueryHookResult = ReturnType<typeof useGetQuestionsLazyQuery>;
export type GetQuestionsSuspenseQueryHookResult = ReturnType<typeof useGetQuestionsSuspenseQuery>;
export type GetQuestionsQueryResult = Apollo.QueryResult<GetQuestionsQuery, GetQuestionsQueryVariables>;
export const GetQuestionDocument = gql`
    query GetQuestion($id: String!) {
  question(id: $id) {
    id
    questionnaire_id
    question_text
    question_type
    is_required
    created_at
    updated_at
    choices {
      id
      choice_text
      created_at
      updated_at
    }
  }
}
    `;

/**
 * __useGetQuestionQuery__
 *
 * To run a query within a React component, call `useGetQuestionQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetQuestionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetQuestionQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetQuestionQuery(baseOptions: Apollo.QueryHookOptions<GetQuestionQuery, GetQuestionQueryVariables> & ({ variables: GetQuestionQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetQuestionQuery, GetQuestionQueryVariables>(GetQuestionDocument, options);
      }
export function useGetQuestionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetQuestionQuery, GetQuestionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetQuestionQuery, GetQuestionQueryVariables>(GetQuestionDocument, options);
        }
export function useGetQuestionSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetQuestionQuery, GetQuestionQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetQuestionQuery, GetQuestionQueryVariables>(GetQuestionDocument, options);
        }
export type GetQuestionQueryHookResult = ReturnType<typeof useGetQuestionQuery>;
export type GetQuestionLazyQueryHookResult = ReturnType<typeof useGetQuestionLazyQuery>;
export type GetQuestionSuspenseQueryHookResult = ReturnType<typeof useGetQuestionSuspenseQuery>;
export type GetQuestionQueryResult = Apollo.QueryResult<GetQuestionQuery, GetQuestionQueryVariables>;
export const CreateQuestionDocument = gql`
    mutation CreateQuestion($input: CreateQuestionInput!) {
  createQuestion(input: $input) {
    id
    questionnaire_id
    question_text
    question_type
    is_required
  }
}
    `;
export type CreateQuestionMutationFn = Apollo.MutationFunction<CreateQuestionMutation, CreateQuestionMutationVariables>;

/**
 * __useCreateQuestionMutation__
 *
 * To run a mutation, you first call `useCreateQuestionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateQuestionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createQuestionMutation, { data, loading, error }] = useCreateQuestionMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateQuestionMutation(baseOptions?: Apollo.MutationHookOptions<CreateQuestionMutation, CreateQuestionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateQuestionMutation, CreateQuestionMutationVariables>(CreateQuestionDocument, options);
      }
export type CreateQuestionMutationHookResult = ReturnType<typeof useCreateQuestionMutation>;
export type CreateQuestionMutationResult = Apollo.MutationResult<CreateQuestionMutation>;
export type CreateQuestionMutationOptions = Apollo.BaseMutationOptions<CreateQuestionMutation, CreateQuestionMutationVariables>;
export const UpdateQuestionDocument = gql`
    mutation UpdateQuestion($input: UpdateQuestionInput!) {
  updateQuestion(input: $input) {
    id
    questionnaire_id
    question_text
    question_type
    is_required
  }
}
    `;
export type UpdateQuestionMutationFn = Apollo.MutationFunction<UpdateQuestionMutation, UpdateQuestionMutationVariables>;

/**
 * __useUpdateQuestionMutation__
 *
 * To run a mutation, you first call `useUpdateQuestionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateQuestionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateQuestionMutation, { data, loading, error }] = useUpdateQuestionMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateQuestionMutation(baseOptions?: Apollo.MutationHookOptions<UpdateQuestionMutation, UpdateQuestionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateQuestionMutation, UpdateQuestionMutationVariables>(UpdateQuestionDocument, options);
      }
export type UpdateQuestionMutationHookResult = ReturnType<typeof useUpdateQuestionMutation>;
export type UpdateQuestionMutationResult = Apollo.MutationResult<UpdateQuestionMutation>;
export type UpdateQuestionMutationOptions = Apollo.BaseMutationOptions<UpdateQuestionMutation, UpdateQuestionMutationVariables>;
export const DeleteQuestionDocument = gql`
    mutation DeleteQuestion($id: String!) {
  deleteQuestion(id: $id)
}
    `;
export type DeleteQuestionMutationFn = Apollo.MutationFunction<DeleteQuestionMutation, DeleteQuestionMutationVariables>;

/**
 * __useDeleteQuestionMutation__
 *
 * To run a mutation, you first call `useDeleteQuestionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteQuestionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteQuestionMutation, { data, loading, error }] = useDeleteQuestionMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteQuestionMutation(baseOptions?: Apollo.MutationHookOptions<DeleteQuestionMutation, DeleteQuestionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteQuestionMutation, DeleteQuestionMutationVariables>(DeleteQuestionDocument, options);
      }
export type DeleteQuestionMutationHookResult = ReturnType<typeof useDeleteQuestionMutation>;
export type DeleteQuestionMutationResult = Apollo.MutationResult<DeleteQuestionMutation>;
export type DeleteQuestionMutationOptions = Apollo.BaseMutationOptions<DeleteQuestionMutation, DeleteQuestionMutationVariables>;
export const GetQuestionnairesDocument = gql`
    query GetQuestionnaires {
  questionnaires {
    id
    user_id
    title
    description
    is_public
    expiry_date
    created_at
    updated_at
    access_url
    organizations {
      id
      name
    }
    questions {
      id
      question_text
      question_type
      is_required
      created_at
      updated_at
    }
  }
}
    `;

/**
 * __useGetQuestionnairesQuery__
 *
 * To run a query within a React component, call `useGetQuestionnairesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetQuestionnairesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetQuestionnairesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetQuestionnairesQuery(baseOptions?: Apollo.QueryHookOptions<GetQuestionnairesQuery, GetQuestionnairesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetQuestionnairesQuery, GetQuestionnairesQueryVariables>(GetQuestionnairesDocument, options);
      }
export function useGetQuestionnairesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetQuestionnairesQuery, GetQuestionnairesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetQuestionnairesQuery, GetQuestionnairesQueryVariables>(GetQuestionnairesDocument, options);
        }
export function useGetQuestionnairesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetQuestionnairesQuery, GetQuestionnairesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetQuestionnairesQuery, GetQuestionnairesQueryVariables>(GetQuestionnairesDocument, options);
        }
export type GetQuestionnairesQueryHookResult = ReturnType<typeof useGetQuestionnairesQuery>;
export type GetQuestionnairesLazyQueryHookResult = ReturnType<typeof useGetQuestionnairesLazyQuery>;
export type GetQuestionnairesSuspenseQueryHookResult = ReturnType<typeof useGetQuestionnairesSuspenseQuery>;
export type GetQuestionnairesQueryResult = Apollo.QueryResult<GetQuestionnairesQuery, GetQuestionnairesQueryVariables>;
export const GetQuestionnaireDocument = gql`
    query GetQuestionnaire($id: String!) {
  questionnaire(id: $id) {
    id
    user_id
    title
    description
    is_public
    expiry_date
    created_at
    updated_at
    access_url
    organizations {
      id
      name
    }
    questions {
      id
      question_text
      question_type
      is_required
      created_at
      updated_at
    }
  }
}
    `;

/**
 * __useGetQuestionnaireQuery__
 *
 * To run a query within a React component, call `useGetQuestionnaireQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetQuestionnaireQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetQuestionnaireQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetQuestionnaireQuery(baseOptions: Apollo.QueryHookOptions<GetQuestionnaireQuery, GetQuestionnaireQueryVariables> & ({ variables: GetQuestionnaireQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetQuestionnaireQuery, GetQuestionnaireQueryVariables>(GetQuestionnaireDocument, options);
      }
export function useGetQuestionnaireLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetQuestionnaireQuery, GetQuestionnaireQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetQuestionnaireQuery, GetQuestionnaireQueryVariables>(GetQuestionnaireDocument, options);
        }
export function useGetQuestionnaireSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetQuestionnaireQuery, GetQuestionnaireQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetQuestionnaireQuery, GetQuestionnaireQueryVariables>(GetQuestionnaireDocument, options);
        }
export type GetQuestionnaireQueryHookResult = ReturnType<typeof useGetQuestionnaireQuery>;
export type GetQuestionnaireLazyQueryHookResult = ReturnType<typeof useGetQuestionnaireLazyQuery>;
export type GetQuestionnaireSuspenseQueryHookResult = ReturnType<typeof useGetQuestionnaireSuspenseQuery>;
export type GetQuestionnaireQueryResult = Apollo.QueryResult<GetQuestionnaireQuery, GetQuestionnaireQueryVariables>;
export const GetQuestionnairesByUserIdDocument = gql`
    query GetQuestionnairesByUserId($user_id: String!) {
  questionnairesByUserId(userId: $user_id) {
    id
    user_id
    title
    description
    is_public
    expiry_date
    created_at
    updated_at
    access_url
    organizations {
      id
      name
    }
    questions {
      id
      question_text
      question_type
      is_required
      created_at
      updated_at
    }
  }
}
    `;

/**
 * __useGetQuestionnairesByUserIdQuery__
 *
 * To run a query within a React component, call `useGetQuestionnairesByUserIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetQuestionnairesByUserIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetQuestionnairesByUserIdQuery({
 *   variables: {
 *      user_id: // value for 'user_id'
 *   },
 * });
 */
export function useGetQuestionnairesByUserIdQuery(baseOptions: Apollo.QueryHookOptions<GetQuestionnairesByUserIdQuery, GetQuestionnairesByUserIdQueryVariables> & ({ variables: GetQuestionnairesByUserIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetQuestionnairesByUserIdQuery, GetQuestionnairesByUserIdQueryVariables>(GetQuestionnairesByUserIdDocument, options);
      }
export function useGetQuestionnairesByUserIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetQuestionnairesByUserIdQuery, GetQuestionnairesByUserIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetQuestionnairesByUserIdQuery, GetQuestionnairesByUserIdQueryVariables>(GetQuestionnairesByUserIdDocument, options);
        }
export function useGetQuestionnairesByUserIdSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetQuestionnairesByUserIdQuery, GetQuestionnairesByUserIdQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetQuestionnairesByUserIdQuery, GetQuestionnairesByUserIdQueryVariables>(GetQuestionnairesByUserIdDocument, options);
        }
export type GetQuestionnairesByUserIdQueryHookResult = ReturnType<typeof useGetQuestionnairesByUserIdQuery>;
export type GetQuestionnairesByUserIdLazyQueryHookResult = ReturnType<typeof useGetQuestionnairesByUserIdLazyQuery>;
export type GetQuestionnairesByUserIdSuspenseQueryHookResult = ReturnType<typeof useGetQuestionnairesByUserIdSuspenseQuery>;
export type GetQuestionnairesByUserIdQueryResult = Apollo.QueryResult<GetQuestionnairesByUserIdQuery, GetQuestionnairesByUserIdQueryVariables>;
export const CreateQuestionnaireDocument = gql`
    mutation CreateQuestionnaire($input: CreateQuestionnaireInput!) {
  createQuestionnaire(input: $input) {
    id
    user_id
    title
    description
    is_public
    expiry_date
  }
}
    `;
export type CreateQuestionnaireMutationFn = Apollo.MutationFunction<CreateQuestionnaireMutation, CreateQuestionnaireMutationVariables>;

/**
 * __useCreateQuestionnaireMutation__
 *
 * To run a mutation, you first call `useCreateQuestionnaireMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateQuestionnaireMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createQuestionnaireMutation, { data, loading, error }] = useCreateQuestionnaireMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateQuestionnaireMutation(baseOptions?: Apollo.MutationHookOptions<CreateQuestionnaireMutation, CreateQuestionnaireMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateQuestionnaireMutation, CreateQuestionnaireMutationVariables>(CreateQuestionnaireDocument, options);
      }
export type CreateQuestionnaireMutationHookResult = ReturnType<typeof useCreateQuestionnaireMutation>;
export type CreateQuestionnaireMutationResult = Apollo.MutationResult<CreateQuestionnaireMutation>;
export type CreateQuestionnaireMutationOptions = Apollo.BaseMutationOptions<CreateQuestionnaireMutation, CreateQuestionnaireMutationVariables>;
export const UpdateQuestionnaireDocument = gql`
    mutation UpdateQuestionnaire($input: UpdateQuestionnaireInput!) {
  updateQuestionnaire(input: $input) {
    id
    user_id
    title
    description
    is_public
    expiry_date
  }
}
    `;
export type UpdateQuestionnaireMutationFn = Apollo.MutationFunction<UpdateQuestionnaireMutation, UpdateQuestionnaireMutationVariables>;

/**
 * __useUpdateQuestionnaireMutation__
 *
 * To run a mutation, you first call `useUpdateQuestionnaireMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateQuestionnaireMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateQuestionnaireMutation, { data, loading, error }] = useUpdateQuestionnaireMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateQuestionnaireMutation(baseOptions?: Apollo.MutationHookOptions<UpdateQuestionnaireMutation, UpdateQuestionnaireMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateQuestionnaireMutation, UpdateQuestionnaireMutationVariables>(UpdateQuestionnaireDocument, options);
      }
export type UpdateQuestionnaireMutationHookResult = ReturnType<typeof useUpdateQuestionnaireMutation>;
export type UpdateQuestionnaireMutationResult = Apollo.MutationResult<UpdateQuestionnaireMutation>;
export type UpdateQuestionnaireMutationOptions = Apollo.BaseMutationOptions<UpdateQuestionnaireMutation, UpdateQuestionnaireMutationVariables>;
export const DeleteQuestionnaireDocument = gql`
    mutation DeleteQuestionnaire($id: String!) {
  deleteQuestionnaire(id: $id)
}
    `;
export type DeleteQuestionnaireMutationFn = Apollo.MutationFunction<DeleteQuestionnaireMutation, DeleteQuestionnaireMutationVariables>;

/**
 * __useDeleteQuestionnaireMutation__
 *
 * To run a mutation, you first call `useDeleteQuestionnaireMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteQuestionnaireMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteQuestionnaireMutation, { data, loading, error }] = useDeleteQuestionnaireMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteQuestionnaireMutation(baseOptions?: Apollo.MutationHookOptions<DeleteQuestionnaireMutation, DeleteQuestionnaireMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteQuestionnaireMutation, DeleteQuestionnaireMutationVariables>(DeleteQuestionnaireDocument, options);
      }
export type DeleteQuestionnaireMutationHookResult = ReturnType<typeof useDeleteQuestionnaireMutation>;
export type DeleteQuestionnaireMutationResult = Apollo.MutationResult<DeleteQuestionnaireMutation>;
export type DeleteQuestionnaireMutationOptions = Apollo.BaseMutationOptions<DeleteQuestionnaireMutation, DeleteQuestionnaireMutationVariables>;
export const GetRolesDocument = gql`
    query GetRoles {
  roles {
    id
    name
    description
    created_at
    updated_at
  }
}
    `;

/**
 * __useGetRolesQuery__
 *
 * To run a query within a React component, call `useGetRolesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRolesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRolesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetRolesQuery(baseOptions?: Apollo.QueryHookOptions<GetRolesQuery, GetRolesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetRolesQuery, GetRolesQueryVariables>(GetRolesDocument, options);
      }
export function useGetRolesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetRolesQuery, GetRolesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetRolesQuery, GetRolesQueryVariables>(GetRolesDocument, options);
        }
export function useGetRolesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetRolesQuery, GetRolesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetRolesQuery, GetRolesQueryVariables>(GetRolesDocument, options);
        }
export type GetRolesQueryHookResult = ReturnType<typeof useGetRolesQuery>;
export type GetRolesLazyQueryHookResult = ReturnType<typeof useGetRolesLazyQuery>;
export type GetRolesSuspenseQueryHookResult = ReturnType<typeof useGetRolesSuspenseQuery>;
export type GetRolesQueryResult = Apollo.QueryResult<GetRolesQuery, GetRolesQueryVariables>;
export const GetRoleDocument = gql`
    query GetRole($id: String!) {
  role(id: $id) {
    id
    name
    description
    created_at
    updated_at
  }
}
    `;

/**
 * __useGetRoleQuery__
 *
 * To run a query within a React component, call `useGetRoleQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRoleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRoleQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetRoleQuery(baseOptions: Apollo.QueryHookOptions<GetRoleQuery, GetRoleQueryVariables> & ({ variables: GetRoleQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetRoleQuery, GetRoleQueryVariables>(GetRoleDocument, options);
      }
export function useGetRoleLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetRoleQuery, GetRoleQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetRoleQuery, GetRoleQueryVariables>(GetRoleDocument, options);
        }
export function useGetRoleSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetRoleQuery, GetRoleQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetRoleQuery, GetRoleQueryVariables>(GetRoleDocument, options);
        }
export type GetRoleQueryHookResult = ReturnType<typeof useGetRoleQuery>;
export type GetRoleLazyQueryHookResult = ReturnType<typeof useGetRoleLazyQuery>;
export type GetRoleSuspenseQueryHookResult = ReturnType<typeof useGetRoleSuspenseQuery>;
export type GetRoleQueryResult = Apollo.QueryResult<GetRoleQuery, GetRoleQueryVariables>;
export const CreateRoleDocument = gql`
    mutation CreateRole($input: CreateRoleInput!) {
  createRole(input: $input) {
    id
    name
    description
  }
}
    `;
export type CreateRoleMutationFn = Apollo.MutationFunction<CreateRoleMutation, CreateRoleMutationVariables>;

/**
 * __useCreateRoleMutation__
 *
 * To run a mutation, you first call `useCreateRoleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateRoleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createRoleMutation, { data, loading, error }] = useCreateRoleMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateRoleMutation(baseOptions?: Apollo.MutationHookOptions<CreateRoleMutation, CreateRoleMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateRoleMutation, CreateRoleMutationVariables>(CreateRoleDocument, options);
      }
export type CreateRoleMutationHookResult = ReturnType<typeof useCreateRoleMutation>;
export type CreateRoleMutationResult = Apollo.MutationResult<CreateRoleMutation>;
export type CreateRoleMutationOptions = Apollo.BaseMutationOptions<CreateRoleMutation, CreateRoleMutationVariables>;
export const UpdateRoleDocument = gql`
    mutation UpdateRole($input: UpdateRoleInput!) {
  updateRole(input: $input) {
    id
    name
    description
  }
}
    `;
export type UpdateRoleMutationFn = Apollo.MutationFunction<UpdateRoleMutation, UpdateRoleMutationVariables>;

/**
 * __useUpdateRoleMutation__
 *
 * To run a mutation, you first call `useUpdateRoleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateRoleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateRoleMutation, { data, loading, error }] = useUpdateRoleMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateRoleMutation(baseOptions?: Apollo.MutationHookOptions<UpdateRoleMutation, UpdateRoleMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateRoleMutation, UpdateRoleMutationVariables>(UpdateRoleDocument, options);
      }
export type UpdateRoleMutationHookResult = ReturnType<typeof useUpdateRoleMutation>;
export type UpdateRoleMutationResult = Apollo.MutationResult<UpdateRoleMutation>;
export type UpdateRoleMutationOptions = Apollo.BaseMutationOptions<UpdateRoleMutation, UpdateRoleMutationVariables>;
export const DeleteRoleDocument = gql`
    mutation DeleteRole($id: String!) {
  deleteRole(id: $id)
}
    `;
export type DeleteRoleMutationFn = Apollo.MutationFunction<DeleteRoleMutation, DeleteRoleMutationVariables>;

/**
 * __useDeleteRoleMutation__
 *
 * To run a mutation, you first call `useDeleteRoleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteRoleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteRoleMutation, { data, loading, error }] = useDeleteRoleMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteRoleMutation(baseOptions?: Apollo.MutationHookOptions<DeleteRoleMutation, DeleteRoleMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteRoleMutation, DeleteRoleMutationVariables>(DeleteRoleDocument, options);
      }
export type DeleteRoleMutationHookResult = ReturnType<typeof useDeleteRoleMutation>;
export type DeleteRoleMutationResult = Apollo.MutationResult<DeleteRoleMutation>;
export type DeleteRoleMutationOptions = Apollo.BaseMutationOptions<DeleteRoleMutation, DeleteRoleMutationVariables>;
export const GetUsersDocument = gql`
    query GetUsers {
  users {
    id
    name
    email
    created_at
    updated_at
  }
}
    `;

/**
 * __useGetUsersQuery__
 *
 * To run a query within a React component, call `useGetUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUsersQuery(baseOptions?: Apollo.QueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, options);
      }
export function useGetUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, options);
        }
export function useGetUsersSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, options);
        }
export type GetUsersQueryHookResult = ReturnType<typeof useGetUsersQuery>;
export type GetUsersLazyQueryHookResult = ReturnType<typeof useGetUsersLazyQuery>;
export type GetUsersSuspenseQueryHookResult = ReturnType<typeof useGetUsersSuspenseQuery>;
export type GetUsersQueryResult = Apollo.QueryResult<GetUsersQuery, GetUsersQueryVariables>;
export const GetUserDocument = gql`
    query GetUser($id: String!) {
  user(id: $id) {
    id
    name
    email
    created_at
    updated_at
  }
}
    `;

/**
 * __useGetUserQuery__
 *
 * To run a query within a React component, call `useGetUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetUserQuery(baseOptions: Apollo.QueryHookOptions<GetUserQuery, GetUserQueryVariables> & ({ variables: GetUserQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
      }
export function useGetUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
        }
export function useGetUserSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
        }
export type GetUserQueryHookResult = ReturnType<typeof useGetUserQuery>;
export type GetUserLazyQueryHookResult = ReturnType<typeof useGetUserLazyQuery>;
export type GetUserSuspenseQueryHookResult = ReturnType<typeof useGetUserSuspenseQuery>;
export type GetUserQueryResult = Apollo.QueryResult<GetUserQuery, GetUserQueryVariables>;
export const CreateUserDocument = gql`
    mutation CreateUser($input: CreateUserInput!) {
  createUser(input: $input) {
    id
    name
    email
  }
}
    `;
export type CreateUserMutationFn = Apollo.MutationFunction<CreateUserMutation, CreateUserMutationVariables>;

/**
 * __useCreateUserMutation__
 *
 * To run a mutation, you first call `useCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateUserMutation(baseOptions?: Apollo.MutationHookOptions<CreateUserMutation, CreateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument, options);
      }
export type CreateUserMutationHookResult = ReturnType<typeof useCreateUserMutation>;
export type CreateUserMutationResult = Apollo.MutationResult<CreateUserMutation>;
export type CreateUserMutationOptions = Apollo.BaseMutationOptions<CreateUserMutation, CreateUserMutationVariables>;
export const UpdateUserDocument = gql`
    mutation UpdateUser($input: UpdateUserInput!) {
  updateUser(input: $input) {
    id
    name
    email
  }
}
    `;
export type UpdateUserMutationFn = Apollo.MutationFunction<UpdateUserMutation, UpdateUserMutationVariables>;

/**
 * __useUpdateUserMutation__
 *
 * To run a mutation, you first call `useUpdateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserMutation, { data, loading, error }] = useUpdateUserMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateUserMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserMutation, UpdateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateUserMutation, UpdateUserMutationVariables>(UpdateUserDocument, options);
      }
export type UpdateUserMutationHookResult = ReturnType<typeof useUpdateUserMutation>;
export type UpdateUserMutationResult = Apollo.MutationResult<UpdateUserMutation>;
export type UpdateUserMutationOptions = Apollo.BaseMutationOptions<UpdateUserMutation, UpdateUserMutationVariables>;
export const DeleteUserDocument = gql`
    mutation DeleteUser($id: String!) {
  deleteUser(id: $id)
}
    `;
export type DeleteUserMutationFn = Apollo.MutationFunction<DeleteUserMutation, DeleteUserMutationVariables>;

/**
 * __useDeleteUserMutation__
 *
 * To run a mutation, you first call `useDeleteUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteUserMutation, { data, loading, error }] = useDeleteUserMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteUserMutation(baseOptions?: Apollo.MutationHookOptions<DeleteUserMutation, DeleteUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteUserMutation, DeleteUserMutationVariables>(DeleteUserDocument, options);
      }
export type DeleteUserMutationHookResult = ReturnType<typeof useDeleteUserMutation>;
export type DeleteUserMutationResult = Apollo.MutationResult<DeleteUserMutation>;
export type DeleteUserMutationOptions = Apollo.BaseMutationOptions<DeleteUserMutation, DeleteUserMutationVariables>;