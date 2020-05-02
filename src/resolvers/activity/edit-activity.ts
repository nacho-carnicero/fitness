import { map } from "lodash/fp";
import {
  Training,
  ActivityParametersInputToEditActivity,
  Circuit,
  Activity
} from "../../types";

/**
 * Function that allows to edit an activity
 * @param previousTraining training object before editing the activity
 * @param activityId id of the activity to be edited
 * @param newParameters new parameters to set in the activity
 */
export const editActivity = (
  previousTraining: Training,
  activityId: string,
  newParameters: ActivityParametersInputToEditActivity
): Training => {
  const newTrainingPlan = map((circuit: Circuit): Circuit => {
    return {
      ...circuit,
      plan: map((activity: Activity): Activity => {
        if (activity.id === activityId) {
          return { ...activity, ...newParameters };
        } else return activity;
      }, circuit.plan)
    };
  }, previousTraining.plan);
  return {
    ...previousTraining,
    plan: newTrainingPlan
  };
};
