const typeDefs = `
    type User {
        id: ID!
        name: String!
        age: Int!
        email: String!
    }

    type Query {
        getAllUsers: [User!]!
    }

    type Mutation {
        createUser(name: String!, age: Int!, email: String!): User!
        updateUser(id:ID!, name:String!, age:Int!,email: String!): User!
        deleteUser(id: ID!): User
    }
`;

export default typeDefs;
