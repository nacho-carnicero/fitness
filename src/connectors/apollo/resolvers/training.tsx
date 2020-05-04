import cuid from "cuid";
import gql from "graphql-tag";
import { Training } from "../../../types";
import { addCircuit } from "../../../utils";

const initialState: { training: Training & { __typename: string } } = {
  training: {
    id: cuid(),
    type: "training",
    plan: [],
    name: "New training",
    __typename: "Training"
  }
};

const resolvers = {
  Mutation: {
    addCircuit: (_, variables, { cache }) => {
      console.log("Will execute query!");
      const query = gql`
        {
          training @client {
            id
            type
            plan {
              id
              type
              name
              plan
            }
            name
          }
        }
      `;
      const { training } = cache.readQuery({ query });
      const newTraining = addCircuit(training);
      console.log("New query:", newTraining);
      const data = {
        training: newTraining
      };
      cache.writeData({ data });
      return null;
    }
  }
};

export default { initialState, resolvers };
