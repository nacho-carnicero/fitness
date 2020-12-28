import gql from "graphql-tag";
import { Training } from "../../../types";
import { addCircuit } from "../../../utils";

const initialState: { training: Training & { __typename: string } } = {
  training: {
    id: "training", // TODO: replace this by cuid once we implement the training selection by ID in the query
    type: "training",
    plan: [],
    name: "New training",
    edit: true,
    __typename: "Training"
  }
};

const resolvers = {
  Mutation: {
    addCircuit: (_, variables, { cache }) => {
      const query = gql`
        {
          training @client {
            id
            type
            name
            edit
            plan {
              id
              type
              name
              plan {
                id
                type
                time
                exercise {
                  name
                }
              }
            }
          }
        }
      `;
      const { training } = cache.readQuery({ query });
      const newTraining = addCircuit(training);
      const data = {
        training: newTraining
      };
      cache.writeData({ data });
      return null;
    },
    resetTraining: (_, variables, { cache }) => {
      const query = gql`
        {
          training @client {
            id
            type
            name
            edit
            plan {
              id
              type
              name
              plan {
                id
                type
                time
                exercise {
                  name
                }
              }
            }
          }
        }
      `;
      const { training } = cache.readQuery({ query });
      const newTraining = { ...training, plan: [] };
      const data = {
        training: newTraining
      };
      cache.writeData({ data });
      return null;
    },
    writeTraining: (_, variables, { cache }) => {
      const training = variables?.training;
      cache.writeData({ data: { training } });
      return null;
    }
  }
};

export default { initialState, resolvers };
