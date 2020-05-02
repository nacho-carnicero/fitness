import { filter, getOr } from "lodash/fp";
import { Training, Circuit } from "../../types";

/**
 * Function that deletes a circuit in the current training plan
 * @param previousTraining training object before deleting the circuit
 * @param circuitId id of the circuit to be deleted
 */
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
