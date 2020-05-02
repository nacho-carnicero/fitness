import { map, filter } from "lodash/fp";
import { Training, Circuit, Activity } from "../../types";

/**
 * Function that deletes an activty from the training
 * @param previousTraining training object before removing the activity
 * @param activityId id of the activity to remove
 */
export const removeActivity = (
  previousTraining: Training,
  activityId: string
): Training => {
  const newTrainingPlan = map(
    (circuit: Circuit) => ({
      ...circuit,
      plan: filter(
        (activity: Activity) => activity.id !== activityId,
        circuit.plan
      )
    }),
    previousTraining.plan
  );
  return { ...previousTraining, plan: newTrainingPlan };
};
