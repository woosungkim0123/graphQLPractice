import { createServer } from "@graphql-yoga/node";
import resolvers from "./graphql/resolvers";

// Create your server
const server = createServer({
  schema: {
    typeDefs: `
      type woosung {
        name: String!
        age: Int!
        gender: String!
      }
      type Query {
        person: woosung!
      }
    `,
    resolvers,
  },
});
// start the server and explore http://localhost:4000/graphql
server.start();
