import gql from "graphql-tag";
import { get } from "lodash/fp";
import {
  removeActivity,
  duplicateActivity,
  editActivity
} from "../../../utils";

const resolvers = {
  Mutation: {
    removeActivity: (_, variables, { cache }) => {
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
      const newTraining = duplicateActivity(training, get("id", variables));
      const data = {
        training: newTraining
      };
      cache.writeData({ data });
      return null;
    },
    editActivity: (_, variables, { cache }) => {
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
      const newTraining = editActivity(
        training,
        get("id", variables),
        get("newParameters", variables)
      );
      const data = {
        training: newTraining
      };
      cache.writeData({ data });
      return null;
    }
  }
};

export default { resolvers };
