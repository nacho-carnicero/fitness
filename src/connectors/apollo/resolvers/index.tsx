import { getOr, reduce } from "lodash/fp";
import trainingState from "./training";
import circuitState from "./circuit";
import activityState from "./activity"
// Append here the reducers you want to integrate the app
const reducers = [trainingState, circuitState, activityState];

// Extract and combine resolvers from the reducers stated above
const resolvers = reduce(
  (result, reducer) => {
    return {
      Mutation: {
        ...result.Mutation,
        ...getOr({}, "resolvers.Mutation", reducer)
      },
      Query: {
        ...result.Query,
        ...getOr({}, "resolvers.Query", reducer)
      }
    };
  },
  { Mutation: {}, Query: {} },
  reducers
);

// Extract and combine initial state from the reducers stated above
const initialState = reduce(
  (result, reducer) => {
    return {
      ...result,
      ...getOr({}, "initialState", reducer)
    };
  },
  {},
  reducers
);

export { resolvers, initialState };
