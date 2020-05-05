import cuid from "cuid";
import gql from "graphql-tag";
import { get } from "lodash/fp";
import { Training } from "../../../types";
import { removeActivity, duplicateActivity } from "../../../utils";

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
    removeActivity: (_, variables, { cache }) => {
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
      const newTraining = removeActivity(training, get("id", variables));
      const data = {
        training: newTraining
      };
      cache.writeData({ data });
      return null;
    },

    duplicateActivity: (_, variables, { cache }) => {
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
      const newTraining = duplicateActivity(training, get("id", variables));
      const data = {
        training: newTraining
      };
      cache.writeData({ data });
      return null;
    }
  },
};

export default { initialState, resolvers };
