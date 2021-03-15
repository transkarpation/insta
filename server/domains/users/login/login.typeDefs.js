import { gql } from "apollo-server-core";

export default gql`
    type LoginResult {
        ok: Boolean!,
        token: String,
        error: String,
        user: User
    }

    type Mutation {
        login(username: String!, password: String!): LoginResult!
    }
`