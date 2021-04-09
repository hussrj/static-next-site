/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateExternalComponentInput = {
  id?: string | null,
  name: string,
  href: string,
  tags: Array< string | null >,
  _version?: number | null,
};

export type ModelExternalComponentConditionInput = {
  name?: ModelStringInput | null,
  href?: ModelStringInput | null,
  tags?: ModelStringInput | null,
  and?: Array< ModelExternalComponentConditionInput | null > | null,
  or?: Array< ModelExternalComponentConditionInput | null > | null,
  not?: ModelExternalComponentConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ExternalComponent = {
  __typename: "ExternalComponent",
  id?: string,
  name?: string,
  href?: string,
  tags?: Array< string | null >,
  _version?: number,
  _deleted?: boolean | null,
  _lastChangedAt?: number,
  createdAt?: string,
  updatedAt?: string,
};

export type UpdateExternalComponentInput = {
  name?: string | null,
  href?: string | null,
  tags?: Array< string | null > | null,
  _version?: number | null,
};

export type DeleteExternalComponentInput = {
  id?: string | null,
  _version?: number | null,
};

export type ModelExternalComponentFilterInput = {
  name?: ModelStringInput | null,
  href?: ModelStringInput | null,
  tags?: ModelStringInput | null,
  and?: Array< ModelExternalComponentFilterInput | null > | null,
  or?: Array< ModelExternalComponentFilterInput | null > | null,
  not?: ModelExternalComponentFilterInput | null,
};

export type ModelExternalComponentConnection = {
  __typename: "ModelExternalComponentConnection",
  items?:  Array<ExternalComponent | null > | null,
  nextToken?: string | null,
  startedAt?: number | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type CreateExternalComponentMutationVariables = {
  input?: CreateExternalComponentInput,
  condition?: ModelExternalComponentConditionInput | null,
};

export type CreateExternalComponentMutation = {
  createExternalComponent?:  {
    __typename: "ExternalComponent",
    id: string,
    name: string,
    href: string,
    tags: Array< string | null >,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateExternalComponentMutationVariables = {
  input?: UpdateExternalComponentInput,
  condition?: ModelExternalComponentConditionInput | null,
};

export type UpdateExternalComponentMutation = {
  updateExternalComponent?:  {
    __typename: "ExternalComponent",
    id: string,
    name: string,
    href: string,
    tags: Array< string | null >,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteExternalComponentMutationVariables = {
  input?: DeleteExternalComponentInput,
  condition?: ModelExternalComponentConditionInput | null,
};

export type DeleteExternalComponentMutation = {
  deleteExternalComponent?:  {
    __typename: "ExternalComponent",
    id: string,
    name: string,
    href: string,
    tags: Array< string | null >,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type SyncExternalComponentsQueryVariables = {
  filter?: ModelExternalComponentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncExternalComponentsQuery = {
  syncExternalComponents?:  {
    __typename: "ModelExternalComponentConnection",
    items?:  Array< {
      __typename: "ExternalComponent",
      id: string,
      name: string,
      href: string,
      tags: Array< string | null >,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetExternalComponentQueryVariables = {
  id?: string,
};

export type GetExternalComponentQuery = {
  getExternalComponent?:  {
    __typename: "ExternalComponent",
    id: string,
    name: string,
    href: string,
    tags: Array< string | null >,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListExternalComponentsQueryVariables = {
  filter?: ModelExternalComponentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListExternalComponentsQuery = {
  listExternalComponents?:  {
    __typename: "ModelExternalComponentConnection",
    items?:  Array< {
      __typename: "ExternalComponent",
      id: string,
      name: string,
      href: string,
      tags: Array< string | null >,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type ExternalComponentsByNameQueryVariables = {
  name?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelExternalComponentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ExternalComponentsByNameQuery = {
  externalComponentsByName?:  {
    __typename: "ModelExternalComponentConnection",
    items?:  Array< {
      __typename: "ExternalComponent",
      id: string,
      name: string,
      href: string,
      tags: Array< string | null >,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnCreateExternalComponentSubscription = {
  onCreateExternalComponent?:  {
    __typename: "ExternalComponent",
    id: string,
    name: string,
    href: string,
    tags: Array< string | null >,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateExternalComponentSubscription = {
  onUpdateExternalComponent?:  {
    __typename: "ExternalComponent",
    id: string,
    name: string,
    href: string,
    tags: Array< string | null >,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteExternalComponentSubscription = {
  onDeleteExternalComponent?:  {
    __typename: "ExternalComponent",
    id: string,
    name: string,
    href: string,
    tags: Array< string | null >,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};
