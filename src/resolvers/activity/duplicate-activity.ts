import cuid from "cuid";
import { get, map, reduce } from "lodash/fp";
import { Training, Activity, Circuit } from "../../types";

/**
 * Function that duplicates an activty in a circuit in the current training plan
 * @param previousTraining training object before adding the new activity
 * @param activityId id of the activity to be duplicated
 */
export const duplicateActivity = (
  previousTraining: Training,
  activityId: string
): Training => {
  const id = cuid();
  const newTrainingPlan = map((circuit: Circuit) => {
    return {
      ...circuit,
      plan: reduce(
        (circuitPlan: Activity[], activity: Activity): Activity[] => {
          if (activity.id === activityId) {
            return [...circuitPlan, activity, { ...activity, id }];
          } else {
            return [...circuitPlan, activity];
          }
        },
        [],
        circuit.plan
      )
    };
  }, get("plan", previousTraining));
  return { ...previousTraining, plan: newTrainingPlan };
};
