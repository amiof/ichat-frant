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
export { createNamespace, SINGUP };
