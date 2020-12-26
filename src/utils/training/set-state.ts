import { Training } from "../../types";

/**
 * Function that enables to change the training state
 * @param previousTraining training object before changing its name
 * @param state new training state
 */
export const setState = (
  previousTraining: Training,
  state: string
): Training => {
  return { ...previousTraining, state };
};
