import gql from "graphql-tag";
import { get, map, flatten, findIndex } from "lodash/fp";
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

const currentActivityQuery = gql`
      {
        currentActivityId @client 
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

      let currentActivityId;
      try {
        const ResultQuery = cache.readQuery({ query: currentActivityQuery });
        currentActivityId = ResultQuery.currentActivityId
      }
      catch {
        currentActivityId = -1;
      }

      const activitiesArray = flatten(
        map(
          circuit => map(activity => activity.id, circuit.plan),
          training.plan
        )
      );
      const nextActivityIndex = 1 + findIndex(
        id => id === currentActivityId,
        activitiesArray
      );

      const nextActivityId = nextActivityIndex < activitiesArray?.length ?
        activitiesArray?.[nextActivityIndex]
        : -1

      const newTraining = {
        ...training,
        plan: map(
          circuit => ({
            ...circuit,
            plan: map(activity => {
              if (activity.id === currentActivityId) {
                return { ...activity, status: ActivityStateTypes.finished };
              } else if (activity.id === nextActivityId) {
                return { ...activity, status: ActivityStateTypes.executing };
              } else {
                return activity;
              }
            }, circuit.plan),
          }),
          training.plan
        )
      };
      cache.writeData({
        data: {
          training: newTraining,
          currentActivityId: nextActivityId
        }
      });

      return null;
    },
    resetToPlanned: (_, variables, { cache }) => {
      const { training } = cache.readQuery({ query: trainingQuery });

      const newTraining = {
        ...training,
        plan: map(
          circuit => ({
            ...circuit,
            plan: map(activity => ({
              ...activity, status: ActivityStateTypes.planned
            }), circuit.plan),
          }),
          training.plan
        )
      };

      cache.writeData({
        data: {
          training: newTraining,
          currentActivityId: -1
        }
      }); return null;
    },
    pauseTime: (_, variables, { cache }) => {
      const { training } = cache.readQuery({ query: trainingQuery });

      let currentActivityId;
      try {
        const ResultQuery = cache.readQuery({ query: currentActivityQuery });
        currentActivityId = ResultQuery.currentActivityId
      }
      catch {
        currentActivityId = -1;
      }

      const activitiesArray = flatten(
        map(
          circuit => map(activity => activity.id, circuit.plan),
          training.plan
        )
      );
      const prevActivityIndex = -1 + findIndex(
        id => id === currentActivityId,
        activitiesArray
      );

      const prevActivityId = prevActivityIndex < 0 ? -1 :
        activitiesArray?.[prevActivityIndex]

      const newTraining = {
        ...training,
        plan: map(
          circuit => ({
            ...circuit,
            plan: map(activity => {
              if (activity.id === currentActivityId) {
                return { ...activity, status: ActivityStateTypes.planned };
              } else {
                return activity;
              }
            }, circuit.plan),
          }),
          training.plan
        )
      };

      cache.writeData({
        data: {
          training: newTraining,
          currentActivityId: prevActivityId
        }
      }); return null;
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
