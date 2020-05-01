import cuid from "cuid";
import { get } from "lodash/fp";
import { Training, CircuitInputToAddCircuit } from "../types";

const defaultEmptyCircuit = { type: "circuit", plan: [] };

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
