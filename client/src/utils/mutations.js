import { gql } from '@apollo/client';

export const ADD_USER = gql `
mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        username
        email
      }
    }
  }
`;

export const USER_LOGIN = gql `
mutation login($email: String!, $password: String!) {
    login(email:$email, password: $password) {
      token
      user {
        email
      }
    }
  }
`;

export const SAVE_BOOK = gql `
mutation saveBook( $input: BookInput) {
    saveBook(input: $input){
      _id
    }
  }
`;

export const REMOVE_BOOK = gql `
  mutation removeBook($bookId: ID!) {
    removeBook(bookId: $bookId {
        bookId
    }
  }
`;