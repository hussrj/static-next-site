/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const syncExternalComponents = /* GraphQL */ `
  query SyncExternalComponents(
    $filter: ModelExternalComponentFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncExternalComponents(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getExternalComponent = /* GraphQL */ `
  query GetExternalComponent($id: ID!) {
    getExternalComponent(id: $id) {
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
export const listExternalComponents = /* GraphQL */ `
  query ListExternalComponents(
    $filter: ModelExternalComponentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listExternalComponents(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const externalComponentsByName = /* GraphQL */ `
  query ExternalComponentsByName(
    $name: String
    $sortDirection: ModelSortDirection
    $filter: ModelExternalComponentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    externalComponentsByName(
      name: $name
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
