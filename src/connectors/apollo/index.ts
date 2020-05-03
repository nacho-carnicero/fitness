import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { resolvers, initialState } from "./resolvers";

const cache = new InMemoryCache();
export const client = new ApolloClient({
  cache,
  resolvers
});

//Write initial state to cache for having something rendered while persisted state gets loaded
cache.writeData({ data: initialState });
