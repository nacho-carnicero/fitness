import { Training } from "../../types";

/**
 * Function that enables to change the training name
 * @param previousTraining training object before changing its name
 * @param name new training name
 */
export const renameTraining = (
  previousTraining: Training,
  name: string
): Training => {
  return { ...previousTraining, name };
};
