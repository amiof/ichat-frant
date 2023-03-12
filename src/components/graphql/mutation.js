import { gql } from "@apollo/client";

const createNamespace = gql`
  mutation {
    createNamespace(name: "music", title: "a music channels") {
      name
      title
      id
      pic
      rooms
    }
  }
`;
const SINGUP = gql`
  mutation singup($username: String, $password: String, $phoneNumber: String) {
    createUser(username: $username, password: $password, phoneNumber: $phoneNumber) {
      username
      id
      password
      phoneNumber
      nameSpace {
        id
        name
      }
      rooms {
        id
        name
        endPoint
      }
      token
      refreshToken
    }
  }
`;
const CREATE_ROOM = gql`
  mutation createRoom($name: String, $title: String, $endPoint: String, $description: String) {
    createRoom(name: $name, title: $title, endPoint: $endPoint, description: $description) {
      id
      title
      endPoint
      description
    }
  }
`;
export { createNamespace, SINGUP, CREATE_ROOM };
