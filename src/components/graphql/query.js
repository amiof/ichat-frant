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
  query {
    users {
      id
      username
      password
      rooms {
        id
        name
        endPoint
        title
      }
      token
    }
  }
`;
const GET_ROOMS = gql`
  query room($plug: String) {
    rooms(endPoint: $plug) {
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
const LOGIN = gql`
  query login($username: String, $password: String) {
    users(username: $username, password: $password) {
      id
      username
      password
      phoneNumber
      pic
      rooms {
        id
        name
        endPoint
        title
        pic
      }
      token
      refreshToken
    }
  }
`;
const GET_ROOM_BYP_PLUG = gql`
  query getRoom($endPoint: String!) {
    rooms(endPoint: $endPoint) {
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
const GET_All_DATA_FOR_USER = gql`
  query ($username: String) {
    users(username: $username) {
      id
      username
      password
      pic
      phoneNumber
      nameSpace {
        id
        pic
        name
        title
        rooms
      }
      rooms {
        id
        name
        endPoint
        title
        pic
        description
        messages {
          id
          sender
          message
        }
      }
      token
      refreshToken
    }
  }
`;
export { GET_ALL_USER, GET_USER, GET_ROOMS, LOGIN, GET_ROOM_BYP_PLUG, GET_All_DATA_FOR_USER };
