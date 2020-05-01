import { filter, getOr } from "lodash/fp";
import { Training, Circuit } from "../types";

export const removeCircuit = (
  previousTraining: Training,
  circuitId: string
): Training => {
  const currentPlannedCircuits = getOr([], "plan", previousTraining);
  const filteredPlannedCircuits = filter(
    (circuit: Circuit) => circuit.id !== circuitId,
    currentPlannedCircuits
  );
  return {
    ...previousTraining,
    plan: filteredPlannedCircuits
  };
};
