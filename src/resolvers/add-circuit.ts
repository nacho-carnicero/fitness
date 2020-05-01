import cuid from "cuid";
import { get } from "lodash/fp";
import { Training, CircuitInputToAddCircuit } from "../types";

const defaultEmptyCircuit = { type: "circuit", plan: [] };

/**
 * Function that adds a circuit to the current training plan
 * @param previousTraining training object before adding the new circuit
 * @param newCircuit circuit object to be added to the training
 */
export const addCircuit = (
  previousTraining: Training,
  newCircuit: CircuitInputToAddCircuit = defaultEmptyCircuit
): Training => {
  const id = cuid();
  return {
    ...previousTraining,
    plan: [
      ...get("plan", previousTraining),
      { ...defaultEmptyCircuit, id, ...newCircuit }
    ]
  };
};
