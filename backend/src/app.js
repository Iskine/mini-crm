import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import typeDefs from './graphql/schema.js';
import resolvers from './graphql/resolvers/index.js';

const app = express();

async function startApolloServer() {
  const server = new ApolloServer({ typeDefs, resolvers });
  await server.start();
  server.applyMiddleware({ app, path: '/graphql' });
}

await startApolloServer();

export default app;
