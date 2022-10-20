export const typeDefs = `
    type Tasks {
        id: ID!
        title: String!
        description: String!
        date: String!
    }

    type Query {
        getTasks: [Tasks]
        getTask(id: ID!): Tasks!
    }

    type Mutation {
        deleteTask(id: ID!): Tasks
        createTask(title: String!, description: String!): Tasks!
    }
`

