import gql from "graphql-tag";
import { get } from "lodash/fp";
import { removeCircuit, addActivity } from "../../../utils";

const resolvers = {
  Mutation: {
    removeCircuit: (_, variables, { cache }) => {
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
      const newTraining = removeCircuit(training, get("id", variables));
      const data = {
        training: newTraining
      };
      cache.writeData({ data });
      return null;
    },
    addActivity: (_, variables, { cache }) => {
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
                status
                exercise {
                  name
                }
              }
            }
          }
        }
      `;
      const { training } = cache.readQuery({ query });
      const newTraining = addActivity(training, get("id", variables));
      const data = {
        training: newTraining
      };
      cache.writeData({ data });
      return null;
    }
  }
};

export default { resolvers };
