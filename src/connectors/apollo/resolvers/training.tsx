import gql from "graphql-tag";
import { get } from "lodash/fp";
import { Training, ActivityStateTypes } from "../../../types";
import { addCircuit, resetTraining } from "../../../utils";

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

const trainingQuery = gql`
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
      }`;

const resolvers = {
  Mutation: {
    addCircuit: (_, variables, { cache }) => {

      const { training } = cache.readQuery({ query: trainingQuery });
      const newTraining = addCircuit(training);
      const data = {
        training: newTraining
      };
      cache.writeData({ data });
      return null;
    },
    setState: (_, variables, { cache }) => {
      const data = {
        state: get("state", variables)
      };
      cache.writeData({ data });
      return null;
    },
    setNextActivity: (_, variables, { cache }) => {
      const { training } = cache.readQuery({ query: trainingQuery });

      let found = false
      const newTraining = { ...training, plan: [...get("plan", training)] }

      for (let i = 0; i < newTraining.plan.length; i++) {
        const circuit = newTraining.plan[i]
        newTraining.plan[i] = { ...circuit, plan: [...get("plan", circuit)] }
        for (let j = 0; j < circuit.plan.length; j++) {
          const activity = { ...newTraining.plan[i].plan[j] }
          newTraining.plan[i].plan[j] = activity
          if (activity.status === ActivityStateTypes.executing) {
            activity.status = ActivityStateTypes.finished
          }
          else if (activity.status === ActivityStateTypes.planned) {
            activity.status = ActivityStateTypes.executing
            found = true;
            break;
          }
        }
        if (found) {
          break;
        }
      }

      cache.writeData({ data: { training: newTraining } });
      return null;
    },
    resetToPlanned: (_, variables, { cache }) => {
      const { training } = cache.readQuery({ query: trainingQuery });
      const newTraining = { ...training, plan: [...get("plan", training)] }

      for (let i = 0; i < newTraining.plan.length; i++) {
        const circuit = newTraining.plan[i]
        newTraining.plan[i] = { ...circuit, plan: [...get("plan", circuit)] }
        for (let j = 0; j < circuit.plan.length; j++) {
          const activity = { ...newTraining.plan[i].plan[j] }
          newTraining.plan[i].plan[j] = activity
          activity.status = ActivityStateTypes.planned
        }
      }

      cache.writeData({ data: { training: newTraining } });
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
          }
        }
      `;
      const { training } = cache.readQuery({ query });
      const newTraining = resetTraining(training);
      cache.writeData({ data: { training: { ...newTraining } } });
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
