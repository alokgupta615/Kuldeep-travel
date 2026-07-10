import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

export const client = new ApolloClient({
  link: new HttpLink({
    uri: "http://kuldeep-travel.local/graphql",
  }),
  cache: new InMemoryCache(),
});