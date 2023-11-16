import { gql } from '@apollo/client';
import { ClientFragment, UserFragment } from './fragments';

export const CURRENT_USER = gql`
  query CURRENT_USER {
    currentUser {
      user {
        ...UserFragment
      }
    }
  }
  ${UserFragment}
`;

export const GET_USERS = gql`
  query GET_USERS(
    $filter: FilterFindManyUserInput
    $skip: Int
    $limit: Int
    $sort: SortFindManyUserInput
  ) {
    users(filter: $filter, skip: $skip, limit: $limit, sort: $sort) {
      ...UserFragment
    }
  }
  ${UserFragment}
`;

export const USER_PAGINATION = gql`
  query USER_PAGINATION(
    $page: Int!
    $perPage: Int!
    $filter: FilterFindManyUserInput
    $sort: SortFindManyUserInput
  ) {
    userPagination(
      page: $page
      perPage: $perPage
      filter: $filter
      sort: $sort
    ) {
      count
      items {
        client
        email
        isVerified
        password
        resetToken
        resetTokenValidity
        sessions {
          user
          token
          device
          active
          _id
          createdAt
          updatedAt
        }
        userType
        active
        _id
        createdAt
        updatedAt
      }
      pageInfo {
        currentPage
        perPage
        itemCount
        pageCount
        hasPreviousPage
        hasNextPage
      }
    }
  }
`;

export const GET_USER = gql`
  query GET_USER(
    $filter: FilterFindOneUserInput!
    $skip: Int
    $sort: SortFindOneUserInput
  ) {
    user(filter: $filter, skip: $skip, sort: $sort) {
      ...UserFragment
    }
  }
  ${UserFragment}
`;

export const GET_CLIENT = gql`
  query GET_CLIENT($data: GetClient) {
    getClient(data: $data) {
      ...ClientFragment
    }
  }
  ${ClientFragment}
`;
