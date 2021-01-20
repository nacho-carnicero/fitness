import { Training } from "../../types";

/**
 * Function that enables to reset the training
 * @param previousTraining training object 
 */
export const resetTraining = (
    previousTraining: Training,
): Training => {
    console.log("Training cleared!")
    return { ...previousTraining, plan: [] };
};
