import { gql } from '@apollo/client';

export const ADD_USER = gql `
    mutation addUser($username: String!, $email: String!, $password: String!) {
        addUser(username: $username, email: $email, password: $password) {
            username,
            email
        }
    }
`;

export const USER_LOGIN = gql `
    mutation login($email: String, $password: String) {
        login(email:$email, password: $password) {
            email
        }
    }
`;

export const SAVE_BOOK = gql `
    mutation saveBook( $input: BookInput) {
        saveBook(input: $input){
        id
    }
  }
`;
// export const SAVE_BOOK = gql `
//   mutation saveBook( $bookId: ID!, $authors: [String], $description: String, $title: String, $image: String, $link: String) {
//     saveBook(bookId: $bookId, authors: [$authors], description: $description, title: $title, image: $image, link: $link) {
//       bookId
//       authors
//       description
//       title
//       image
//       link
//     }
//   }
// `;

export const REMOVE_BOOK = gql `
  mutation removeBook($bookId: ID!) {
    removeBook(bookId: $bookId {
        bookId
    }
  }
`;