import { loadFilesSync, mergeResolvers, mergeTypeDefs, makeExecutableSchema } from "graphql-tools";

const loadedTepes = loadFilesSync(`${__dirname}/**/*.typeDefs.js`);
const loadedResolvers = loadFilesSync(
  `${__dirname}/**/*.resolvers.js`
);
const typeDefs = mergeTypeDefs(loadedTepes);
const resolvers = mergeResolvers(loadedResolvers);

export default makeExecutableSchema({ typeDefs, resolvers });
