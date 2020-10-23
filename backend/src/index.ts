import "reflect-metadata";
import { importSchema } from "graphql-import";
import { GraphQLServer } from "graphql-yoga";
import { createConnection } from "typeorm";
import * as path from "path";
import { resolvers } from "./resolvers";


export const startServer = async () => {
  const typeDefs = importSchema(path.join(__dirname, "./schema.graphql"));

  const server = new GraphQLServer({ typeDefs, resolvers });
  await createConnection();
  await server.start();
  console.log("Server is running on localhost:4000");
}


/*const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const typeDefs = importSchema(path.join(__dirname, "./schema.graphql"));
const server = new ApolloServer({ typeDefs, resolvers });
const app = express();
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);*/

startServer();
