import cuid from "cuid";
import { get } from "lodash/fp";
import { Training, CircuitInputToAddCircuit } from "../types";

const defaultEmptyCircuit = { type: "circuit", plan: [] };

export const addCircuit = (
  previousPlan: Training,
  newCircuit: CircuitInputToAddCircuit = defaultEmptyCircuit
) => {
  const id = cuid();
  return {
    ...previousPlan,
    plan: [
      ...get("plan", previousPlan),
      { ...defaultEmptyCircuit, id, ...newCircuit }
    ]
  };
};
