import cuid from "cuid";
import { get, map } from "lodash/fp";
import { Training, ActivityInputToAddActivity, Circuit } from "../../types";

const defaultEmptyActivity = {
  type: "activity",
  exercise: { name: "New exercise", __typename: "Exercise" },
  time: 0,
  __typename: "Activity"
};

/**
 * Function that adds an activty to a circuit in the current training plan
 * @param previousTraining training object before adding the new circuit
 * @param circuitId id of the circuit where the activity is to be added
 * @param newActivity activity object to be added to the circuit
 */
export const addActivity = (
  previousTraining: Training,
  circuitId: string,
  newActivity: ActivityInputToAddActivity = defaultEmptyActivity
): Training => {
  const id = cuid();
  const newTrainingPlan = map((circuit: Circuit) => {
    if (circuit.id === circuitId) {
      return {
        ...circuit,
        plan: [...circuit.plan, { ...defaultEmptyActivity, id, ...newActivity }]
      };
    } else {
      return circuit;
    }
  }, get("plan", previousTraining));
  return { ...previousTraining, plan: newTrainingPlan };
};
