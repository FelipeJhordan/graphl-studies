import { ApolloServer, gql} from 'apollo-server'

const typeDefs = gql`
    type User {
        id: String!
        name: String!
    }

    type Query {
        users:  [User!]!
    }

    type Mutation {
        createUser( name: String) : User!
    }
`

type User = {
    id: string
    name: string
}



const users: User[] = []

const server = new ApolloServer({
    typeDefs,
    resolvers: {
        Query: {
            users: () => {
                return users
            }
        },

        Mutation: {
            createUser: (_, args) => {
                const user: User = {
                    name: args.name,
                    id: `${users.length + 1}`
                }
                users.push(user)
                return  user
            }
        }
    }
})

server.listen().then(
    ({url}) => {
        console.log('HTTP server running on ', url)
    }
)