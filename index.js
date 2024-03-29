const {ApolloServer, gql}= require('apollo-server');
const SessionAPI = require('./datasources/sessions');

//pull dummy data from json file
//const sessions = require('./data/sessions.json');

//SCHEMA
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
    track:String @deprecated(reason: "too many sessions do not fit in a single track"),
    level:String
}`


//create resolver map object that hold - type:field:resolver
const resolvers = {
    Query: {
        sessions: () => {
            return sessions;
        }
    }
}

//set up datasource
const dataSources = () => {
    sessionAPI: new SessionAPI();
}

//add resolver to the constructor and datasources
const server = new ApolloServer({typeDefs, resolvers, dataSources});

server
.listen({port: process.env.PORT || 4000})
//pull the url from the object that gets passed in
//url that the server is running at
.then(({url}) => {
    console.log(`graphQL is running at ${url}`);
})