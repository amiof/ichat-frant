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
const createUser = gql`
  mutation {
    createUser(username: "amiefd3", password: "12345", phoneNumber: "09127234793") {
      username
      id
      password
      phoneNumber
      nameSpace
      rooms
      token
      refreshToken
    }
  }
`;
export { createNamespace, createUser };
