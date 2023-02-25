import { gql } from "@apollo/client";
const GET_USER = gql`
  query user($username: String) {
    users(username: $username) {
      id
      username
      password
      rooms
    }
  }
`;

const GET_ALL_USER = gql`
  query user($username: String) {
    users(username: $username) {
      id
      username
      password
      rooms
    }
  }
`;
const GET_ROOMS = gql`
  query {
    rooms {
      id
      name
      pic
      title
      endPoint
      description
      messages {
        id
        sender
        message
      }
    }
  }
`;

export { GET_ALL_USER, GET_USER, GET_ROOMS };
