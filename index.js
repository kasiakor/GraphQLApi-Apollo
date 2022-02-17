const {ApolloServer}= require('apollo-server');

const server = new ApolloServer();

server
.listen({port: process.env.PORT || 4000})
//pull the url from the object that gets passed in
//url that the server is running at
.then(({url}) => {
    console.log(`graphQL is running at ${url}`);
})