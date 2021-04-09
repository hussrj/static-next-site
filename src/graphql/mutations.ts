/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createExternalComponent = /* GraphQL */ `
  mutation CreateExternalComponent(
    $input: CreateExternalComponentInput!
    $condition: ModelExternalComponentConditionInput
  ) {
    createExternalComponent(input: $input, condition: $condition) {
      id
      name
      href
      tags
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateExternalComponent = /* GraphQL */ `
  mutation UpdateExternalComponent(
    $input: UpdateExternalComponentInput!
    $condition: ModelExternalComponentConditionInput
  ) {
    updateExternalComponent(input: $input, condition: $condition) {
      id
      name
      href
      tags
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteExternalComponent = /* GraphQL */ `
  mutation DeleteExternalComponent(
    $input: DeleteExternalComponentInput!
    $condition: ModelExternalComponentConditionInput
  ) {
    deleteExternalComponent(input: $input, condition: $condition) {
      id
      name
      href
      tags
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
