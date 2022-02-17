const {ApolloServer, gql}= require('apollo-server');

//define object that will hold the schema for API
//define what queries are allowe by the API
//gql function - JavaScript template literal tag that parses GraphQL queries into an abstract syntax tree (AST). It is the recommended method for passing queries to Apollo Client
const typeDefs = gql`
type Query {
    sessions:[Session]
}
type Session {
    id: ID!,
    title: String!,
    description: String,
    startsAt: String,
    endsAt: String,
    room: String,
    day: String,
    format:String,
    track:String,
    level:String
}`

const server = new ApolloServer({typeDefs});

server
.listen({port: process.env.PORT || 4000})
//pull the url from the object that gets passed in
//url that the server is running at
.then(({url}) => {
    console.log(`graphQL is running at ${url}`);
})