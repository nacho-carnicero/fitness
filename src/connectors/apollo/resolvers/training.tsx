import cuid from "cuid";
import gql from "graphql-tag";
import { get } from "lodash/fp";
import { Training } from "../../../types";
import { addCircuit, setState } from "../../../utils";

const initialState: { training: Training & { __typename: string } } = {
  training: {
    id: cuid(),
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
    setState: (_, variables, { cache }) => {
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
      const newStateTraining = setState(training, get("state", variables));
      const data = {
        training: newStateTraining
      };
      cache.writeData({ data });
      return null;
    }
  }
};

export default { initialState, resolvers };
