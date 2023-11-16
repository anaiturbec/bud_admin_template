import { gql } from '@apollo/client';

export const ClientFragment = gql`
  fragment ClientFragment on Client {
    slug
    bankAccounts
    birthDate
    budget
    customerId
    dni
    dniType
    expectedMonthlySavings
    fullName
    gender
    histories
    monthlyIncome
    isVerified
    plans
    phone
    plantLife
    active
    _id
    createdAt
    updatedAt
  }
`;

export const UserFragment = gql`
  fragment UserFragment on User {
    _id
    active
    client
    createdAt
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
      createdAt
      updatedAt
    }
    userType
    updatedAt
  }
`;
