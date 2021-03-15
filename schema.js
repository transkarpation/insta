import { makeExecutableSchema } from "apollo-server-express";
import { loadFilesSync, mergeResolvers, mergeTypeDefs } from "graphql-tools";

const loadedTepes = loadFilesSync(`${__dirname}/**/*.typeDefs.js`);
const loadedResolvers = loadFilesSync(
  `${__dirname}/**/*.{queries,mutations}.js`
);
const typeDefs = mergeTypeDefs(loadedTepes);
const resolvers = mergeResolvers(loadedResolvers);

export default makeExecutableSchema({ typeDefs, resolvers });
