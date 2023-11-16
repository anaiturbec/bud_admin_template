import { gql } from '@apollo/client';
import { UserFragment } from './fragments';

export const SIGN_IN = gql`
  mutation SIGN_IN($data: SignInInput) {
    signIn(data: $data) {
      user {
        ...UserFragment
      }
      token
    }
  }
  ${UserFragment}
`;

export const UPDATE_USER = gql`
  mutation UPDATE_USER(
    $data: FilterUpdateOneUserInput
    $filter: UpdateOneUserInput!
  ) {
    updateUser(data: $data, filter: $filter) {
      ...UserFragment
    }
  }
  ${UserFragment}
`;

export const CREATE_USER = gql`
  mutation CREATE_USER($data: CreateOneUserInput!) {
    createUser(data: $data) {
      ...UserFragment
    }
  }
  ${UserFragment}
`;

export const SIGN_S3 = gql`
  mutation SIGN_S3($data: SignS3Input) {
    signS3(data: $data) {
      signedRequest
      url
    }
  }
`;

export const SIGN_OUT = gql`
  mutation SIGN_OUT {
    signOut {
      success
    }
  }
`;
