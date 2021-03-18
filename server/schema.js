import { loadFilesSync, mergeResolvers, mergeTypeDefs } from "graphql-tools";

const loadedTepes = loadFilesSync(`${__dirname}/**/*.typeDefs.js`);
const loadedResolvers = loadFilesSync(
  `${__dirname}/**/*.resolvers.js`
);
export const typeDefs = mergeTypeDefs(loadedTepes);
export const resolvers = mergeResolvers(loadedResolvers);